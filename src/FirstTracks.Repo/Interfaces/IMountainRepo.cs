using FirstTracks.Core.Models;
using System.Threading.Tasks;

namespace FirstTracks.Repo.Interfaces
{
	public interface IMountainRepo
	{
		Task<Mountain> GetMountainAsync(string mountainId); 
	}
}
