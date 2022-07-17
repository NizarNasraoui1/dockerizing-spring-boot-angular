package com.toubibnet.toubibnet.service;

import com.toubibnet.toubibnet.model.Answer;
import com.toubibnet.toubibnet.model.Doctor;
import com.toubibnet.toubibnet.model.Question;
import com.toubibnet.toubibnet.model.User;
import com.toubibnet.toubibnet.repository.AnswerRepository;
import com.toubibnet.toubibnet.repository.DoctorRepo;
import com.toubibnet.toubibnet.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.print.Doc;
import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    @Autowired
    AnswerRepository answerRepository;

    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    DoctorRepo doctorRepo;

    public List<Answer> findAll() {
        return answerRepository.findAll();
    }

    public Answer findById(Long id) {
        Optional<Answer> answer = answerRepository.findById(id);
        if (!answer.isPresent()) {
            return new Answer();
        }
        return answer.get();
    }
    public List<Answer> findByQuestion(Long id) {
        List<Answer> answer = answerRepository.findByQuestion(id);
        return answer;
    }

    public Answer save(Answer answer, Long idQuestion, Long idDoctor) {
        Optional<Question> question = questionRepository.findById(idQuestion);
        Optional<Doctor> doctor = doctorRepo.findById(idDoctor);
        answer.setDoctor(doctor.get());
        answer.setQuestion(question.get());
        return answerRepository.save(answer);
    }

    public Answer update(Answer answer) {
        Optional<Answer> answer1 = answerRepository.findById(answer.getId());
        if (!answer1.isPresent()){
            System.err.println("answer null");
            return new Answer();
        }
        System.err.println(answer1);
        answer.setDoctor(answer1.get().getDoctor());
        answer.setQuestion(answer1.get().getQuestion());
        return answerRepository.save(answer);
    }

    public boolean delete(Long id) {
        answerRepository.deleteById(id);
        Optional<Answer> answer = answerRepository.findById(id);
        if (answer.isPresent()) {
            return false;
        }
        return true;
    }
}
