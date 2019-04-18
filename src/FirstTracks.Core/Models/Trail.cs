using FirstTracks.Core.Enums;
using System.Linq;

namespace FirstTracks.Core.Models
{
	public class Trail : BaseModel
	{
		public string TrailId { get; set; }

		public string Difficulty { get; set; }
		public string Name { get; set; }	
	}
}
