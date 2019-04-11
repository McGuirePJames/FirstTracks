using System.Threading.Tasks;
using FirstTracks.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FirstTracks.Api.Controllers
{
	[Route("/api/[controller]/[action]")]
	[ApiController]
	public class SkiResortController : ControllerBase
    {
		private readonly ISkiResortService _skiResortService;

		public SkiResortController(
			ISkiResortService skiResortService
		)
		{
			this._skiResortService = skiResortService;
		}

		[HttpGet]
		public async Task<IActionResult> GetSkiResortAsync(string skiResortId)
		{
			return Ok(await this._skiResortService.GetSkiResortAsync(skiResortId));
		}

		[HttpGet]
		public async Task<IActionResult> GetSkiResortsAsync()
		{
			return Ok(await this._skiResortService.GetSkiResortsAsync());
		}
	}
}