using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HandyManApp.Startup))]
namespace HandyManApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
