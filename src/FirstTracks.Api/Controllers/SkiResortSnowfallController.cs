using FirstTracks.Core.Models;
using FirstTracks.Service.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace FirstTracks.Api.Controllers
{
	[Route("api/[controller]/[action]")]
    [ApiController]
    public class SkiResortSnowfallController : ControllerBase
    {
		private readonly ISkiResortSnowfallService _skiResortSnowfallService;

		
		public SkiResortSnowfallController(
			ISkiResortSnowfallService skiResortSnowfallService)
		{
			this._skiResortSnowfallService = skiResortSnowfallService;
		}

		[HttpGet]
		public async Task<ActionResult<SkiResortSnowfall>> GetSkiResortSnowfallAsync(string skiResortId)
		{
			return Ok(await this._skiResortSnowfallService.GetSkiResortSnowfallAsync(skiResortId));
		}
    }
}