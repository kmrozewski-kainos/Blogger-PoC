package com.blogger.poc.configuration;

import com.blogger.poc.persistence.dao.PostsDao;
import com.blogger.poc.persistence.dao.hibernate.PostsDaoHibernateImpl;
import com.google.inject.AbstractModule;
import com.google.inject.Singleton;
import org.hibernate.SessionFactory;

public class HibernateModule extends AbstractModule {

	private final HibernateBundle hibernateBundle;

	public HibernateModule(HibernateBundle hibernateBundle) {
		this.hibernateBundle = hibernateBundle;
	}

	@Override
	protected void configure() {
		bind(SessionFactory.class).toInstance(hibernateBundle.getSessionFactory());
		bind(PostsDao.class).to(PostsDaoHibernateImpl.class).in(Singleton.class);
	}
}
