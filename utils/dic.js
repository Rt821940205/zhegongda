export const dictionary = {
	A: '成果',
	B: '图书',
	C: '会议',
	D: '学位论文',
	E: 'EI',
	I: 'SCI',
	J: '中文期刊',
	O: '项目',
	P: '专利',
	Q: '其他',
	R: '报告',
	S: '标准',
	T: '团队',
	U: 'SCOPUS',
	Y: '活动',
}

export const achmentDetailDic = {
	'I': [{
			'name': '标题',
			'index': 'title'
		},
		{
			'name': '姓名',
			'index': 'creatorAll'
		},
		{
			'name': '关键词',
			'index': 'keyword'
		},
		{
			'name': '中文期刊',
			'index': 'journal'
		},
		{
			'name': '年份',
			'index': 'year'
		},
		{
			'name': '类型',
			'index': 'type'
		},
		{
			'name': '卷',
			'index': 'volume'
		},
		{
			'name': '期',
			'index': 'issue'
		},
	],
	'O': [{
			'name': '项目标题',
			'index': 'title'
		},
		{
			'name': '参与人',
			'index': 'creatorAll'
		},
		{
			'name': '主持人',
			'index': 'participant'
		},
		{
			'name': '项目编号',
			'index': 'projectNo'
		},
		{
			'name': '项目基金',
			'index': 'projectFund'
		},
		{
			'name': '项目来源',
			'index': 'projectOrigin'
		},
		{
			'name': '合同金额',
			'index': 'totalAmount'
		},
		{
			'name': '年份',
			'index': 'year'
		},
	],
	'P': [{
			'name': '专利名称',
			'index': 'patentName'
		},
		{
			'name': '全体发明人',
			'index': 'allInventors'
		},
		{
			'name': '法律状态',
			'index': 'legalState'
		},
		{
			'name': '专利申请编号',
			'index': 'applicationNo'
		},
		{
			'name': '专利编号',
			'index': 'patentNo'
		},
		{
			'name': '专利发布时间',
			'index': 'publicationDate'
		}
	],
	'B': [{
			'name': '标题',
			'index': 'patentName'
		},
		{
			'name': '作者',
			'index': 'creator'
		},
		{
			'name': '出版年',
			'index': 'year'
		},
	],
	'A': [{
			'name': '成果名称',
			'content': 'patentName'
		},
		{
			'name': '参与人',
			'content': 'allCompletedPeople'
		},
		{
			'name': '获奖类型',
			'content': 'awardType'
		},
		{
			'name': '获奖年度',
			'content': 'awardWinningYear'
		},
		{
			'name': '奖励等级',
			'content': 'awardWinningLevel'
		}
	],
}
