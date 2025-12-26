# Sub-Store Config & Templates

> **简介**：一个 Sub-Store 的配置文件集合，[原作者](https://github.com/Seameee/override-hub)删除了教程，所以我自己修改了功能，留作备份

[![Sub-Store](https://img.shields.io/badge/Tools-Sub--Store-blue?style=flat-square&logo=github)](https://github.com/sub-store-org/Sub-Store)
[![Mihomo](https://img.shields.io/badge/Config-Mihomo-orange?style=flat-square)](https://github.com/MetaCubeX/mihomo)
[![Sing-Box](https://img.shields.io/badge/Config-Sing--Box-black?style=flat-square)](https://github.com/SagerNet/sing-box)

---

## 组合订阅模板

### 功能特性

* **节点重命名**：自动规范化节点名称，整齐划一。
* **智能排序**：按国家、地区或延迟对节点进行排序。
* **替换旗帜**：为节点名称添加或修复对应的国旗 Emoji。
* **IPv6 解析**：支持 IPv6 入口解析（可选开启）。
* **流量整合**：整合多机场的流量使用情况与到期时间。
* **链式代理**：针对家宽/落地节点自动设置代理链（可选开启）。

### 使用方法

1.  进入 **Sub-Store** 界面，点击 `订阅管理` (Subscription)。
2.  点击左上角的 **+ 号**。
3.  选择导入，将 [**`sub-store组合订阅模板`**](https://raw.githubusercontent.com/iP3ter/sub-store-config/refs/heads/main/lazy/combine.json) 导入到本地配置。
4.  在配置详情中，选择你需要整合的 **订阅**。
5.  点击保存即可生成新的组合订阅链接。

---

## 托管配置模板

### 包含内容
- [**Mihomo 配置**](https://raw.githubusercontent.com/iP3ter/sub-store-config/refs/heads/main/lazy/mihomo.json)
- [**Sing-box 配置**](https://raw.githubusercontent.com/iP3ter/sub-store-config/refs/heads/main/lazy/singbox.json)

### 使用方法

1.  进入 **Sub-Store** 界面，点击 `文件管理` (Files)。
2.  点击左上角的 **+ 号**。
3.  根据你的需求选择操作：
    *   **Mihomo 用户**：将 `mihomo配置` 导入本地。
    *   **Sing-box 用户**：将 `singbox配置` 导入本地。
