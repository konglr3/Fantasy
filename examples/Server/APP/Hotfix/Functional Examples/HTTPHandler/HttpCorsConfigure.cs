using Fantasy.Async;
using Fantasy.Event;
using Fantasy.Network.HTTP;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace Fantasy;

/// <summary>
/// 为 HTTP 示例开启 CORS，供 Cocos Creator 浏览器预览（origin 如 http://localhost:7456）跨域访问。
/// </summary>
public sealed class OnConfigureHttpServices_Cors : AsyncEventSystem<OnConfigureHttpServices>
{
    protected override async FTask Handler(OnConfigureHttpServices self)
    {
        self.Builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowAll", builder =>
            {
                builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            });
        });

        await FTask.CompletedTask;
    }
}

/// <summary>
/// 启用 CORS 中间件（须在认证等中间件之前；端点映射由框架在事件之后完成）。
/// </summary>
public sealed class OnConfigureHttpApplication_Cors : AsyncEventSystem<OnConfigureHttpApplication>
{
    protected override async FTask Handler(OnConfigureHttpApplication self)
    {
        self.Application.UseCors("AllowAll");
        await FTask.CompletedTask;
    }
}
