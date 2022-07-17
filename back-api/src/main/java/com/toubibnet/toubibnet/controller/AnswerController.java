package com.toubibnet.toubibnet.controller;

import com.toubibnet.toubibnet.model.Answer;
import com.toubibnet.toubibnet.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/answer")
@RestController
public class AnswerController {
    @Autowired
    AnswerService answerService;


    @GetMapping
    public List<Answer> findAll() {
        return answerService.findAll();
    }

    @GetMapping("/{id}")
    public Answer findById(@PathVariable Long id) {
        return answerService.findById(id);
    }

    @GetMapping("/question/{id}")
    public List<Answer> findByQuestion(@PathVariable Long id){
        return answerService.findByQuestion(id);
    }
    @PostMapping("/question/{idQuestion}/doctor/{idDoctor}")
    public Answer save(@RequestBody Answer answer, @PathVariable Long idQuestion, @PathVariable Long idDoctor) {
        return answerService.save(answer, idQuestion, idDoctor);
    }

    @PutMapping
    public Answer update(@RequestBody Answer answer) {
        return answerService.update(answer);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable Long id) {
        return answerService.delete(id);
    }

}
