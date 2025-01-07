import { ExternalLink, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export const InstagramFeed = () => {
  // This would normally come from the Instagram API
  const instagramPosts = [
    {
      id: 1,
      imageUrl: "https://picsum.photos/400/400", // Placeholder image
      caption: "Exploring new technologies! 💻",
      likes: 42,
      link: "https://www.instagram.com/joydipdas856/",
    },
    {
      id: 2,
      imageUrl: "https://picsum.photos/401/400", // Different placeholder
      caption: "Another day of coding! 🚀",
      likes: 38,
      link: "https://www.instagram.com/joydipdas856/",
    },
    {
      id: 3,
      imageUrl: "https://picsum.photos/402/400", // Different placeholder
      caption: "Learning never stops! 📚",
      likes: 45,
      link: "https://www.instagram.com/joydipdas856/",
    },
  ];

  return (
    <section className="py-16 bg-space-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-space-purple/5 via-space-dark to-space-darker" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Instagram className="w-8 h-8 text-space-purple" />
          <h2 className="font-pixel text-2xl text-white">Instagram Feed</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group relative bg-space-darker rounded-lg overflow-hidden border border-space-purple/20 backdrop-blur-sm"
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm mb-2">{post.caption}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">❤️ {post.likes}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/10 backdrop-blur-sm hover:bg-white/20"
                      onClick={() => window.open(post.link, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Post
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button
            className="bg-space-purple hover:bg-space-purple/80"
            onClick={() => window.open("https://www.instagram.com/joydipdas856/", "_blank")}
          >
            <Instagram className="mr-2 h-4 w-4" />
            Follow on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};