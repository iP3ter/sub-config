import requests
import os
import re

# 目标 IP 列表 URLs
urls = [
    "https://raw.githubusercontent.com/teishahbc/bgp-cn-ip/refs/heads/main/cn_as4134_as56040_ipv4.txt",
    "https://raw.githubusercontent.com/teishahbc/bgp-cn-ip/main/cn_other_asns_ipv4.txt",
    "https://ruleset.skk.moe/Clash/ip/china_ip.txt"
]

# 输出目录和文件名
output_dir = "cnip"
output_file = os.path.join(output_dir, "china_ip.txt")

# 使用集合存储，自动去重
unique_ips = set()

# 正则表达式：严格匹配 IP 或 CIDR，忽略行后的注释
# 匹配类似: 1.1.1.1 或 1.1.1.1/24，并捕获这一部分
ip_pattern = re.compile(r"^\s*(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?:/\d{1,2})?)")

print("Starting IP address processing...")

for url in urls:
    try:
        print(f"Fetching data from {url}...")
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        
        content = response.text
        lines = content.splitlines()
        
        count = 0
        for line in lines:
            line = line.strip()
            # 忽略空行和纯注释行
            if not line or line.startswith('#'):
                continue
            
            # 使用正则提取纯净的 IP/CIDR (去掉行尾的 #注释)
            match = ip_pattern.match(line)
            if match:
                ip_cidr = match.group(1)
                unique_ips.add(ip_cidr)
                count += 1
                
        print(f"Found and added {count} entries from {url}")

    except requests.exceptions.RequestException as e:
        print(f"Error fetching {url}: {e}")
        continue

# 如果输出目录不存在则创建
if not os.path.exists(output_dir):
    print(f"Creating directory: {output_dir}")
    os.makedirs(output_dir)

# 排序以保证输出一致性，减少 git diff 的杂乱
sorted_ips = sorted(list(unique_ips))

# 写入文件
try:
    with open(output_file, 'w', encoding='utf-8') as f:
        for ip in sorted_ips:
            f.write(ip + '\n')
    print(f"Successfully merged {len(sorted_ips)} unique IPs into {output_file}")
except IOError as e:
    print(f"Error writing to file {output_file}: {e}")
