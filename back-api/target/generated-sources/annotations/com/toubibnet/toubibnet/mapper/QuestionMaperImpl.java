package com.toubibnet.toubibnet.mapper;

import com.toubibnet.toubibnet.dto.QuestionDto;
import com.toubibnet.toubibnet.model.Question;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-14T19:49:52+0200",
    comments = "version: 1.4.2.Final, compiler: Eclipse JDT (IDE) 1.4.50.v20210914-1429, environment: Java 17.0.2 (Eclipse Adoptium)"
)
@Component
public class QuestionMaperImpl implements QuestionMaper {

    @Override
    public List<QuestionDto> toDtos(List<Question> dtos) {
        if ( dtos == null ) {
            return null;
        }

        List<QuestionDto> list = new ArrayList<QuestionDto>( dtos.size() );
        for ( Question question : dtos ) {
            list.add( toDto( question ) );
        }

        return list;
    }

    @Override
    public List<Question> toBos(List<QuestionDto> bos) {
        if ( bos == null ) {
            return null;
        }

        List<Question> list = new ArrayList<Question>( bos.size() );
        for ( QuestionDto questionDto : bos ) {
            list.add( toBo( questionDto ) );
        }

        return list;
    }

    @Override
    public QuestionDto toDto(Question bo) {
        if ( bo == null ) {
            return null;
        }

        QuestionDto questionDto = new QuestionDto();

        return questionDto;
    }

    @Override
    public Question toBo(QuestionDto dto) {
        if ( dto == null ) {
            return null;
        }

        Question question = new Question();

        return question;
    }

    @Override
    public Question fillBo(QuestionDto dto, Question bo) {
        if ( dto == null ) {
            return null;
        }

        return bo;
    }
}
