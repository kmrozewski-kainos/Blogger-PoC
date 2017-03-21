package com.blogger.poc.persistence.dao.hibernate.mapper;

import org.modelmapper.ModelMapper;

import static org.modelmapper.convention.MatchingStrategies.STRICT;

public abstract class Mapper {

	private ModelMapper modelMapper;

	public Mapper() {
		modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(STRICT);
	}

	protected ModelMapper getModelMapper() {
		return modelMapper;
	}
}
