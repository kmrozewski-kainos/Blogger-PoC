package mapper;

import org.modelmapper.ModelMapper;

import static org.modelmapper.convention.MatchingStrategies.STRICT;

public abstract class Mapper {

	protected ModelMapper modelMapper;

	public Mapper() {
		modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(STRICT);
	}
}
