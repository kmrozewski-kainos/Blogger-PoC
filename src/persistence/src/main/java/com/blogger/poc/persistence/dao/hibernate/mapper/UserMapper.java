package com.blogger.poc.persistence.dao.hibernate.mapper;

import com.blogger.poc.persistence.dao.hibernate.entities.UserEntity;
import com.blogger.poc.persistence.domain.User;

public class UserMapper extends Mapper {

	public User mapUserEntityToUser(UserEntity entity) {
		return getModelMapper().map(entity, User.class);
	}

	public UserEntity mapUserToUserEntity(User domain) {
		return getModelMapper().map(domain, UserEntity.class);
	}
}
