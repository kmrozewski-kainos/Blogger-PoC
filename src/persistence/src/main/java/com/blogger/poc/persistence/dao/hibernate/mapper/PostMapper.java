package com.blogger.poc.persistence.dao.hibernate.mapper;

import com.blogger.poc.persistence.dao.hibernate.entities.PostEntity;
import com.blogger.poc.persistence.domain.Post;

public class PostMapper extends Mapper {

	public Post mapPostEntityToPost(PostEntity entity) {
		return getModelMapper().map(entity, Post.class);
	}

	public PostEntity mapPostToPostEntity(Post domain) {
		return getModelMapper().map(domain, PostEntity.class);
	}
}
