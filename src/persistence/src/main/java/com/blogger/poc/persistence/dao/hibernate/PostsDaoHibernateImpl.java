package com.blogger.poc.persistence.dao.hibernate;

import com.blogger.poc.persistence.dao.PostsDao;
import com.blogger.poc.persistence.dao.hibernate.entities.PostEntity;
import com.blogger.poc.persistence.dao.hibernate.mapper.PostMapper;
import com.blogger.poc.persistence.domain.Post;
import com.blogger.poc.persistence.domain.User;
import io.dropwizard.hibernate.AbstractDAO;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.ws.rs.WebApplicationException;
import java.util.List;

import static com.google.common.collect.Lists.transform;

@Repository
public class PostsDaoHibernateImpl extends AbstractDAO<PostEntity> implements PostsDao {

	private final static String SELECT_ALL = "SELECT p FROM PostEntity p";

	@Autowired
	private PostMapper postMapper;

	@Autowired
	public PostsDaoHibernateImpl(SessionFactory sessionFactory) {
		super(sessionFactory);
	}

	@Override
	public List<Post> getPosts() {
		Query query = currentSession().createQuery(SELECT_ALL);
		List<PostEntity> postEntities = list(query);
		throwExceptionIfNull(postEntities);

		return transform(postEntities, postMapper::mapPostEntityToPost);
	}

	@Override
	public Post getPostById(Long postId) {
		Criteria criteria = currentSession().createCriteria(PostEntity.class);
		criteria.add(Restrictions.idEq(postId));

		return postMapper.mapPostEntityToPost(uniqueResult(criteria));
	}

	@Override
	public List<Post> getPostsByAuthor(User user) {
		Criteria criteria = currentSession().createCriteria(PostEntity.class);
		criteria.add(Restrictions.eq("user.id", user.getId()));
		List<PostEntity> postEntities = list(criteria);
		throwExceptionIfNull(postEntities);

		return transform(postEntities, postMapper::mapPostEntityToPost);
	}

	private void throwExceptionIfNull(List<PostEntity> entities) {
		if (entities == null) {
			throw new WebApplicationException("no posts found");
		}
	}
}
