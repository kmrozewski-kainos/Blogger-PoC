package com.blogger.poc.resources;

import com.blogger.poc.persistence.dao.PostsDao;
import com.blogger.poc.persistence.domain.Post;
import com.blogger.poc.persistence.domain.User;
import com.google.inject.Inject;
import io.dropwizard.hibernate.UnitOfWork;

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
public class PostsResource {

	private PostsDao postsDao;

	@Inject
	public PostsResource(PostsDao postsDao) {
		this.postsDao = postsDao;
	}

	@GET
	@Path("/{postId}")
	@UnitOfWork
	public Post getPostById(@PathParam("postId") Long postId) {
		return postsDao.getPostById(postId);
	}

	@POST
	@UnitOfWork
	public List<Post> getPostsByAuthor(User user) {
		return postsDao.getPostsByAuthor(user);
	}
}
