<?php
namespace SDK\Controller;
use Think\Controller;
class SDKController extends Controller {
	/**
	 * [login description]
	 * @return [type] [description]
	 */
   	public function login(){
   		$user = array(
   			'username' => I("username"),
   			'password' => md5(I("password"))
   		);
   		$userService = D("Employe","Service");
   		$result = $userService -> login($user);   		
   		$this->ajaxReturn($result);
   	}
         /**
          * [getEmployeHandler description]
          * @return [type] [description]
          */
         public function getEmployeHandler(){
               $requstMap  = array(
                     'sEcho' =>I("sEcho") ,
                     'iDisplayStart' => I("iDisplayStart"),
                     'iDisplayLength' => I('iDisplayLength'),
                     'sSearch' => I('sSearch')
               );
               $employeService = D("Employe","Service");
               $result = $employeService -> findEmploye($requstMap);
               $this -> ajaxReturn($result);
         }
}