using FirstTracks.Core.Models;
using FirstTracks.Repo.Interfaces;
using FirstTracks.Service.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstTracks.Service.Services
{
	public class MountainService : IMountainService
	{
		private readonly IMountainRepo _mountainRepo;

		public MountainService(
			IMountainRepo mountainRepo
		)
		{
			this._mountainRepo = mountainRepo;
		}
		
		public async Task<Mountain> GetMountainAsync(string mountainId)
		{
			return await this._mountainRepo.GetMountainAsync(mountainId);
		}

		public async Task<List<Mountain>> GetMountainsAsync()
		{
			return await this._mountainRepo.GetMountainsAsync();
		}
	}
}
