namespace FirstTracks.Core.Models
{
	public class SkiResortSnowfall : BaseModel
	{
		public string SkiResortSnowfallId { get; set; }
		public int Month { get; set; }
		public int Year { get; set; }
		public int Inches { get; set; }
	}
}
