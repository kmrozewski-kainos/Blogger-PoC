package com.blogger.poc.resources;

import com.blogger.poc.persistence.dao.PostsDao;
import com.blogger.poc.persistence.domain.Post;
import com.blogger.poc.persistence.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import java.util.List;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

@Path("/post")
@Produces(APPLICATION_JSON)
@Consumes(APPLICATION_JSON)
@Component
public class PostsResource {

	@Autowired
	private PostsDao postsDao;

	@GET
	@Path("/{postId}")
	@Transactional
	public Post getPostById(@PathParam("postId") Long postId) {
		return postsDao.getPostById(postId);
	}

	@POST
	@Transactional
	public List<Post> getPostsByAuthor(User user) {
		return postsDao.getPostsByAuthor(user);
	}
}
