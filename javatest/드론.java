package javatest;

import java.util.ArrayList;
 
public class 드론 {
    public static void main(String[] args) {
        ArrayList<드론영상> list = new ArrayList<>();

        // sql문 실행 - select * from 드론영상

        list.add( new 드론영상("속리산 산불 감시", "2026-02-02"));
        list.add( new 드론영상("계족산 산불 감시", "2026-02-03"));
        list.add( new 드론영상("대전 중구 순찰", "2026-02-04"));

        화면에보내기( list );
    }

    public static ArrayList<드론영상> 화면에보내기(ArrayList<드론영상> list){
        return list;
    }
}

// 영상 하나더 보내서 html에 출력하기
// 영상 제목은 대전 중구 순찰 , 날짜는 2026-02-04

// 드론영상 목록 관리
/*
필요한 데이터 - 제목, 날짜
자바에서 하일 -> 클래스(제목, 날짜) , 클래스에 대한 객체, 컬렉션에 저장, 메서드(보내고 받고)
DB에서 할일  -> 테이블 만들기 (자바의 클래스와 같은 형태)
html에서 할일 -> 데이터 출력할 영역을 태그로 만들고 꾸미기

프로젝트 작업 순서
문제파악 -> 데이터 결정 -> 클래스, 테이블 이름 결정 -> html(입력 및 출력) -> DB(데이터 저장) -> 자바(메서드(보내고 받고))



*/