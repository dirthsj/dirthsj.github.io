using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.DependencyInjection;
using BlazorDownloadFile;

namespace PersonalWebsiteBlazor
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("app");

            builder.Services.AddTransient(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
            builder.Services.AddBlazorDownloadFile();

            await builder.Build().RunAsync();

            RandomReferenceSoBlazorLinksAssmebly();
        }

        public static string RandomReferenceSoBlazorLinksAssmebly()
        {
            return typeof(IBlazorDownloadFileService).Name;
        }
    }
}
