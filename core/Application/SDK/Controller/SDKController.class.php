<?php
namespace SDK\Controller;
use Think\Controller;

class SDKController extends Controller {
	/**
	 * [login description]
	 * @return [type] [description]
	 */
	public function login() {
		$user = array(
			'username' => I("username"),
			'password' => md5(I("password")),
		);
		$userService = D("Employe", "Service");
		$result = $userService->login($user);
		$this->ajaxReturn($result);
	}
	/**
	 * [getEmployeHandler description]
	 * @return [type] [description]
	 */
	public function getEmployeHandler() {
		$requstMap = array(
			'sEcho' => I("sEcho"),
			'iDisplayStart' => I("iDisplayStart"),
			'iDisplayLength' => I('iDisplayLength'),
			'sSearch' => I('sSearch'),
		);
		$employeService = D("Employe", "Service");
		$result = $employeService->findEmploye($requstMap);
		$this->ajaxReturn($result);
	}
	/**
	 * [getDepHandler description]
	 * @return [type] [description]
	 */
	public function getDepHandler() {
		$departmentService = D("Department", "Service");
		$result = $departmentService->findDepHandler();
		$this->ajaxReturn($result);
	}

	/**
	 * [saveEmployeHandler description]
	 * @return [type] [description]
	 */
	public function saveEmployeHandler() {
		$employeService = D("Employe", "Service");
		$employe = array(
			'id' => I("id"),
			'employe_id' => I("employe_id"),
			'nick_name' => I("nickname"),
			'department' => I("depart"),
			'enable' => I("enabled"),
			'email' => I('email'),
		);
		if ($employe["id"] != null) {
			$result = $employeService->updateEmploye($employe);
			$this->ajaxReturn($result);
		} else {
			$result = $employeService->addEmploye($employe);
			$this->ajaxReturn($result);
		}
	}
	/**
	 * [deleteEmployeHandler description]
	 * @return [type] [description]
	 */
	public function deleteEmployeHandler() {
		$employeService = D("Employe", "Service");
		$result = $employeService->deleteEmploye(I("id"));
		$this->ajaxReturn($result);
	}

	public function getEmployNewId() {
		$employeService = D("Employe", "Service");
		$result = $employeService->findNewEmployeId();
		$this->ajaxReturn($result);
	}
}
