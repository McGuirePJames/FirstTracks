using System.Collections.Generic;

namespace FirstTracks.Core.Models
{
	public class Mountain : BaseModel
	{
		public string MountainId { get; set; }
		public string Name { get; set; }
		public List<Trail> Trails { get; set; }
	}
}
