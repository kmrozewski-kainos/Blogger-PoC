package com.blogger.poc.persistence.dao;

import com.blogger.poc.persistence.domain.Post;
import com.blogger.poc.persistence.domain.User;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface PostsDao {

	List<Post> getPosts();
	Post getPostById(Long postId);
	List<Post> getPostsByAuthor(User user);
}
