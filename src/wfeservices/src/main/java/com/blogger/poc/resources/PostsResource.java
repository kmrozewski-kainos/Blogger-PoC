package com.blogger.poc.resources;

import com.blogger.poc.persistence.dao.PostsDao;
import com.blogger.poc.persistence.domain.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

@Path("/posts")
@Produces(APPLICATION_JSON)
@Consumes(APPLICATION_JSON)
@Component
public class PostsResource {

	@Autowired
	private PostsDao postsDao;

	@GET
	@Transactional
	public Post getPostById() {
		return postsDao.getPostById(1L);
	}
}
