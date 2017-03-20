package com.blogger.poc.configuration;

import io.dropwizard.db.PooledDataSourceFactory;
import io.dropwizard.hibernate.ScanningHibernateBundle;

public class HibernateBundle extends ScanningHibernateBundle<BloggerConfiguration> {

	public HibernateBundle(String pckg) {
		super(pckg);
	}

	@Override
	public PooledDataSourceFactory getDataSourceFactory(BloggerConfiguration configuration) {
		return configuration.getDataSourceFactory();
	}
}
