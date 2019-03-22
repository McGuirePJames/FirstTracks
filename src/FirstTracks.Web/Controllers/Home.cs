using Microsoft.AspNetCore.Mvc;

namespace FirstTracks.Web.Controllers
{
	public class Home : Controller
	{
		[Route("/")]
		public IActionResult Index()
		{
			return View("~/Views/Home.cshtml");
		}
	}
}
