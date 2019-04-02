using Microsoft.AspNetCore.Mvc;

namespace FirstTracks.Web.Controllers
{
	public class MountainController : Controller
    {
		[Route("/Mountain")]
        public IActionResult Index(int resortId)
        {
            return View("~/Views/Mountain.cshtml");
        }
    }
}