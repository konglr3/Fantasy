using System.Collections.Generic;

namespace Fantasy.ProtocolExportTool.Models;

public enum ProtocolExportType
{
    None = 0,
    Client = 1,
    Server = 1 << 1,
    All = Client | Server,
}

public class ProtocolExportConfig
{
    public string ProtocolDir { get; set; } = string.Empty;
    public string ServerDir { get; set; } = string.Empty;
    public string ClientDir { get; set; } = string.Empty;
    public string TypeScriptClientDir { get; set; } = string.Empty;
    public bool ExportTypeScriptClient { get; set; }
    public string OpCodeCacheFile { get; set; } = string.Empty;
    public List<ProtocolExportTarget> PackageExports { get; set; } = new();
    public ProtocolExportType ExportType { get; set; } = ProtocolExportType.All;
}

public class ProtocolExportTarget
{
    public string ProtocolDir { get; set; } = string.Empty;
    public string ServerDir { get; set; } = string.Empty;
    public string ClientDir { get; set; } = string.Empty;
    public string TypeScriptClientDir { get; set; } = string.Empty;
    public bool ExportTypeScriptClient { get; set; }
    public ProtocolExportType ExportType { get; set; } = ProtocolExportType.All;
}
