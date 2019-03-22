using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Linq;

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
