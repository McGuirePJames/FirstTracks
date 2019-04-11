using Microsoft.AspNetCore.Mvc;

namespace FirstTracks.Web.Controllers
{
	public class MountainController : Controller
    {
		[Route("/Mountain")]
        public IActionResult Index(int skiResortId)
        {
            return View("~/Views/Mountain.cshtml");
        }
    }
}