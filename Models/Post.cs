using System.Collections.Generic;

namespace PersonalWebsiteBlazor.Models
{
    public class Post
    {
        public string Title { get; set; }
        public string Body { get; set; }
        public Dictionary<string, string> Links { get; set; }
    }
}