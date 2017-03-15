package mapper;

import dao.hibernate.entities.PostEntity;
import domain.Post;
import org.springframework.stereotype.Component;

@Component
public class PostMapper extends Mapper {

	public Post mapPostEntityToPost(PostEntity entity) {
		return modelMapper.map(entity, Post.class);
	}

	public PostEntity mapPostToPostEntity(Post domain) {
		return modelMapper.map(domain, PostEntity.class);
	}
}
