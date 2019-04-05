using System.Threading.Tasks;
using FirstTracks.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FirstTracks.Api.Controllers
{
	[Route("/api/[controller]/[action]")]
	[ApiController]
	public class MountainController : ControllerBase
    {
		private readonly IMountainService _mountainService;

		public MountainController(
			IMountainService mountainService
		)
		{
			this._mountainService = mountainService;
		}

		[HttpGet]
		public async Task<IActionResult> GetMountainAsync(string mountainId)
		{
			return Ok(await this._mountainService.GetMountainAsync(mountainId));
		}

		[HttpGet]
		public async Task<IActionResult> GetMountainsAsync()
		{
			return Ok(await this._mountainService.GetMountainsAsync());
		}
	}
}