package com.toubibnet.toubibnet.mapper;

import com.toubibnet.toubibnet.dto.QuestionDto;
import com.toubibnet.toubibnet.model.Question;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuestionMaper extends GenericMapper<Question, QuestionDto> {
}
