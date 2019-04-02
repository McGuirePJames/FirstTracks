using Microsoft.AspNetCore.Mvc;

namespace FirstTracks.Web.Controllers
{
	public class HomeController : Controller
	{
		private void CreateUser()
		{

		}

		[Route("/")]
		public IActionResult Index()
		{
			return View("~/Views/Home.cshtml");
		}
	}
}
