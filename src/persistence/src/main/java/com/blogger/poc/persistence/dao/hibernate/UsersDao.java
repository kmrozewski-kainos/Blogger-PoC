package com.blogger.poc.persistence.dao.hibernate;

import com.blogger.poc.persistence.domain.User;

public interface UsersDao {

	void addUser(User user);
	void updateUser(User user);
	void deleteUser(String userName);
	User getUser(String userName);
}
