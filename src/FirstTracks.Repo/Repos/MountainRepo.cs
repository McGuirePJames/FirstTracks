using Dapper;
using FirstTracks.Core.Models;
using FirstTracks.Repo.Interfaces;
using Microsoft.Extensions.Options;
using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using System.Linq;
using Newtonsoft.Json;
using System.Collections.Generic;

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
				var result = JsonConvert.SerializeObject(await conn.QueryAsync("usp_getmountain", new
				{
					mountainId
				}, commandType: CommandType.StoredProcedure).Result.FirstOrDefault());

				return JsonConvert.DeserializeObject<Mountain>(result);
			}
		}
	}
}

