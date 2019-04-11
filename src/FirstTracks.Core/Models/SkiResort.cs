using System.Collections.Generic;

namespace FirstTracks.Core.Models
{
	public class SkiResort : BaseModel
	{
		public string SkiResortId { get; set; }
		public string Name { get; set; }
		public string ImagePath { get; set; }
		public List<Trail> Trails { get; set; }

		public SkiResort()
		{
			this.Trails = new List<Trail>();
		}
	}
}
