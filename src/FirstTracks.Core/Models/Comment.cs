namespace FirstTracks.Core.Models
{
	public class Comment : BaseModel
	{
		public string CommentId { get; set; }		
		public string UserId { get; set; }
		public string Message { get; set; }
	}
}
