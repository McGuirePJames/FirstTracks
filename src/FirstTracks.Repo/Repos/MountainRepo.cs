using Dapper;
using FirstTracks.Core.Models;
using FirstTracks.Repo.Interfaces;
using Microsoft.Extensions.Options;
using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace FirstTracks.Repo.Repos
{
	public class MountainRepo : IMountainRepo
	{
		private readonly ConnectionStrings _connectionStrings;
		public MountainRepo(
			IOptions<ConnectionStrings> options)
		{
			this._connectionStrings = options.Value;
		}

		public async Task<Mountain> GetMountainAsync(string mountainId)
		{
			using (SqlConnection conn = new SqlConnection(this._connectionStrings.FirstTracksDB))
			{
					var result = await conn.QueryAsync<Mountain>("usp_getmountain", new
					{
						MountainId = mountainId
					}, commandType: CommandType.StoredProcedure);
				
				return null;
			};
		}
	}
}
