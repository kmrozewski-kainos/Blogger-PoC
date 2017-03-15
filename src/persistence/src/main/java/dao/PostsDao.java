package dao;

import domain.Post;
import domain.User;

import java.util.List;

public interface PostsDao {

	List<Post> getPosts();
	Post getPostById(Long postId);
	List<Post> getPostsByAuthor(User user);
}
