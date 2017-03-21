package com.blogger.poc.persistence.dao.hibernate;

import com.blogger.poc.persistence.dao.hibernate.entities.UserEntity;
import com.blogger.poc.persistence.dao.hibernate.mapper.UserMapper;
import com.blogger.poc.persistence.domain.User;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import io.dropwizard.hibernate.AbstractDAO;
import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;

@Singleton
public class UsersDaoHibernateImpl extends AbstractDAO<UserEntity> implements UsersDao {

	private UserMapper userMapper;

	@Inject
	public UsersDaoHibernateImpl(SessionFactory sessionFactory, UserMapper userMapper) {
		super(sessionFactory);
		this.userMapper = userMapper;
	}

	@Override
	public void addUser(User user) {
		persist(userMapper.mapUserToUserEntity(user));
	}

	@Override
	public void updateUser(User user) {
		currentSession().update(userMapper.mapUserToUserEntity(user));
	}

	@Override
	public void deleteUser(String userName) {
		currentSession().delete(getByUserName(userName));
	}

	@Override
	public User getUser(String userName) {
		return userMapper.mapUserEntityToUser(getByUserName(userName));
	}

	private UserEntity getByUserName(String userName) {
		Criteria criteria = currentSession().createCriteria(UserEntity.class);
		criteria.add(Restrictions.eq("", userName));

		return uniqueResult(criteria);
	}
}
