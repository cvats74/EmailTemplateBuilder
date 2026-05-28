using Microsoft.AspNetCore.Mvc;

namespace EmailTemplateBuilder.Controllers
{
    public class BuilderController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
