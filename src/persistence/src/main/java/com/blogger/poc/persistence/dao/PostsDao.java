package com.blogger.poc.persistence.dao;

import com.blogger.poc.persistence.domain.Post;
import com.blogger.poc.persistence.domain.User;

import java.util.List;

public interface PostsDao {

	List<Post> getPosts();
	Post getPostById(Long postId);
	List<Post> getPostsByAuthor(User user);
}
