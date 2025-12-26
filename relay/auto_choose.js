// 链式代理自动设置脚本，自动选择对应地区节点进行中继，需要节点名中含有“家宽”或“落地”才会生效，按需启用
// 如果想要设置链式代理的订阅没有包含以上字样，可以在单条订阅中添加一个正则命名操作，左侧设置为“$”，右侧设置为“ 落地”
// ⚠️注意与下面的链式代理设置脚本只能启用其中一个
const substringCountries = ['香港', '台湾', '日本', '美国', '韩国', '英国', '法国', '德国'];

// 定义允许的协议类型列表
const allowedProtocols = ['ss', 'socks5', 'http'];

// 调整外层判断条件：
// 1. 节点名称包含 '家宽' 或 '落地' (原条件)
// 2. 节点的代理协议类型在 allowedProtocols 列表中
if (($server.name.includes('家宽') || $server.name.includes('落地')) && allowedProtocols.includes($server.type)) {
  // 原有的重命名逻辑被包裹在这里面
  // 这个块只有在名字包含 '家宽' 或 '落地' 且协议是 shadowsocks, socks5, 或 http 时才会执行

  if ($server.name.includes('新加坡')) {
    // 如果包含“新加坡”，并且满足外层两个条件
    $server['underlying-proxy'] = '狮城节点';
  } else if ($server.name.includes('SG')) {
    // 如果包含“SG”，并且满足外层两个条件
    $server['underlying-proxy'] = '狮城节点';
  } else if ($server.name.includes('TR')) {
    // 如果包含“TR”，并且满足外层两个条件
    $server['underlying-proxy'] = '德国节点';
  } else if ($server.name.includes('US')) {
    // 如果包含“TR”，并且满足外层两个条件
    $server['underlying-proxy'] = '美国节点';
  } else if (substringCountries.some(country => $server.name.includes(country))) {
    // 如果包含其他指定国家之一，并且满足外层两个条件
    // 这里的 substring(5, 7) 依然保留原样，如果你的节点格式变了，记得调整。
    const prefix = $server.name.substring(5, 7);
    const underlyingProxyName = prefix + '节点';
    $server['underlying-proxy'] = underlyingProxyName;
  } else {
    // 如果不包含“新加坡”或任何指定国家，但满足外层两个条件
    // 依然设为“香港节点”。
    $server['underlying-proxy'] = '香港节点';
  }
}
// 如果节点名称不包含 '家宽' 或 '落地'，或者协议不是 shadowsocks, socks5, 或 http，
// 则跳过上面的整个 if 块，$server['underlying-proxy'] 将不会被修改。
