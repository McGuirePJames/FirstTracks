using FirstTracks.Core.Models;
using FirstTracks.Repo.Interfaces;
using FirstTracks.Service.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstTracks.Service.Services
{
	public class SkiResortService : ISkiResortService
	{
		private readonly ISkiResortRepo _skiResortRepo;

		public SkiResortService(
			ISkiResortRepo skiResortRepo
		)
		{
			this._skiResortRepo = skiResortRepo;
		}
		
		public async Task<SkiResort> GetSkiResortAsync(string skiResortId)
		{
			return await this._skiResortRepo.GetSkiResortAsync(skiResortId);
		}

		public async Task<List<SkiResort>> GetSkiResortsAsync()
		{
			return await this._skiResortRepo.GetSkiResortsAsync();
		}


	}
}
