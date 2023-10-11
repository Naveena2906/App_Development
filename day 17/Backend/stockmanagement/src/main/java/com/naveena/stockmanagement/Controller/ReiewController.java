package com.naveena.stockmanagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.naveena.stockmanagement.Model.Review;
import com.naveena.stockmanagement.Service.ReviewService;
import com.naveena.stockmanagement.constant.Api;

import java.util.List;
@RequestMapping(Api.AUTH)
@RestController
public class ReiewController {
    @Autowired
    public ReviewService rs;
    @GetMapping("/getreview")
    public List<Review> get()
    {
        return rs.getreview();
    }
    @PostMapping("/postreview")
    public String add(Review rm)
    {
        rs.postreview(rm);
        return "Added";
    }
    @DeleteMapping("/delete/{rid}")
    public String del(@PathVariable int rid)
    {
        rs.deletereview(rid);
        return "deleted";
    }
}
