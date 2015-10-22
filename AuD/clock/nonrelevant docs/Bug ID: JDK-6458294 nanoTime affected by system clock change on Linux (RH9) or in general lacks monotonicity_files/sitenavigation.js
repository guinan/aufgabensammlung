/////////////////////////////////////////////////////////////////////////////
// Function : NavNode (constructor)
// Comments :
/////////////////////////////////////////////////////////////////////////////
function NavNode(id, label, href, parent)
{
	this.m_parent = null;
	this.m_level = 0;

	if (parent)
	{
		this.m_parent = parent;
		this.m_level = parent.m_level+1;
	}

	this.m_id = id;

	// assume that m_label will most often be used directly as HTML
	this.m_rawlabel = label;

	label = label.replace(/&/g, '&amp;');
	label = label.replace(/</g, '&lt;');
	label = label.replace(/>/g, '&gt;');
	label = label.replace(/"/g, '&quot;');

	this.m_label = label;

	this.m_href = href;
	this.m_subNodes = new Array();

	var argValues = NavNode.arguments;
	var argCount = NavNode.arguments.length;

	for (i = 4 ; i < argCount ; i++)
	{
		var eqPos = argValues[i].indexOf("==");
		var attrName = argValues[i].substring(0,eqPos);
		var attrValue = argValues[i].substring(eqPos+2);

		eval("this.cp_" + attrName + " = '" + attrValue + "';");
	}

	NavNode.prototype.addNode = addNode;
	NavNode.prototype.isSelected = isSelected;
}

/////////////////////////////////////////////////////////////////////////////
// Function : addNode
// Comments :
/////////////////////////////////////////////////////////////////////////////
function addNode(id, label, href)
{
	var newIndex = this.m_subNodes.length;
	var newNode = new NavNode(id, label, href, this);

	var argValues = addNode.arguments;
	var argCount = addNode.arguments.length;

	for (i = 3 ; i < argCount ; i++)
	{
		var eqPos = argValues[i].indexOf("==");
		var attrName = argValues[i].substring(0,eqPos);
		var attrValue = argValues[i].substring(eqPos+2);

		eval("newNode.cp_" + attrName + " = '" + attrValue + "';");
	}

	this.m_subNodes[newIndex] = newNode;
	return newNode;
}

/////////////////////////////////////////////////////////////////////////////
// Function : isSelected
// Comments :
/////////////////////////////////////////////////////////////////////////////
function isSelected()
{
    var pos = window.location.href.lastIndexOf("/");
    var docname = window.location.href.substring(pos+1, window.location.href.length);

    pos = this.m_href.lastIndexOf("/");
    var myname = this.m_href.substring(pos+1, this.m_href.length);

    if (docname == myname)
		return true;
	else
		return false;
}

/////////////////////////////////////////////////////////////////////////////
// Function : customSectionPropertyExists
// Comments :
/////////////////////////////////////////////////////////////////////////////
function customSectionPropertyExists(csp)
{
	return (typeof csp != _U && csp != null);
}

/////////////////////////////////////////////////////////////////////////////
// Function : getCustomSectionProperty
// Comments :
/////////////////////////////////////////////////////////////////////////////
function getCustomSectionProperty(csp)
{
	if (customSectionPropertyExists(csp))
	{
		return csp;
	}
	else
	{
		return "";
	}
}

/////////////////////////////////////////////////////////////////////////////

var g_navNode_Root = new NavNode('8','Home',ssUrlPrefix + 'index.html',null,'secondaryUrlVariableField==MainBody');
g_navNode_0=g_navNode_Root.addNode('ocomen-technologies','Technologies',ssUrlPrefix + 'technologies/index.html','secondaryUrlVariableField==MainContent','ssManagerAccount==MKTG_ADMIN/OCOM_ADMIN');
g_navNode_0_0=g_navNode_0.addNode('ocomen-cloud','Cloud Computing',ssUrlPrefix + 'technologies/cloud/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_1=g_navNode_0.addNode('ocomen_bpm','BPM',ssUrlPrefix + 'technologies/bpm/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_1_0=g_navNode_0_1.addNode('ocomen-bpmsuite','BPM Suite',ssUrlPrefix + 'technologies/bpm/bpm-suite/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technologies/bpm/bpm-suite.html');
g_navNode_0_1_1=g_navNode_0_1.addNode('ocomen-bpm-bpasuite','BPA Suite',ssUrlPrefix + 'technologies/bpm/bpa-suite/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/soa/025593.htm');
g_navNode_0_1_2=g_navNode_0_1.addNode('ocomen-bpm-soasuite','SOA Suite',ssUrlPrefix + 'technologies/bpm/soa-suite/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technologies/soa/soa-suite.html');
g_navNode_0_1_3=g_navNode_0_1.addNode('ocomen-bpm-soa','SOA ',ssUrlPrefix + 'technologies/bpm/soa/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/soa/index.htm');
g_navNode_0_1_4=g_navNode_0_1.addNode('ocomen-bpm-edasuite','EDA Suite',ssUrlPrefix + 'technologies/bpm/eda-suite/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technologies/soa/eda/eda-suite.html');
g_navNode_0_2=g_navNode_0.addNode('ocomen-datawarehouse','Data Warehousing',ssUrlPrefix + 'technologies/datawarehousing/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/solutions/datawarehousing/index.html');
g_navNode_0_3=g_navNode_0.addNode('ocomen_embedded','Embedded',ssUrlPrefix + 'technologies/embedded/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_4=g_navNode_0.addNode('ocomen-grid','Grid Computing',ssUrlPrefix + 'technologies/grid/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_5=g_navNode_0.addNode('ocomen-information-lifecycle','Information Lifecycle Management',ssUrlPrefix + 'technologies/information-lifecycle-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_6=g_navNode_0.addNode('ocomen-microsoft','Microsoft',ssUrlPrefix + 'technologies/microsoft/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_7=g_navNode_0.addNode('ocomen_mobileenterprise','Mobile Enterprise',ssUrlPrefix + 'technologies/mobile-enterprise/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_8=g_navNode_0.addNode('ocomen-modernization','Modernization',ssUrlPrefix + 'technologies/modernization/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_8_0=g_navNode_0_8.addNode('ocomen-mod-approaches','Modernization Approaches',ssUrlPrefix + 'technologies/modernization/approaches/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_8_1=g_navNode_0_8.addNode('ocomen-mod-partners','Modernization Partners',ssUrlPrefix + 'technologies/modernization/partners/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_9=g_navNode_0.addNode('ocomen-next-generation-data','Next Generation Data Center',ssUrlPrefix + 'technologies/next-generation-data-center/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_10=g_navNode_0.addNode('ocomen_opensource','Open Source',ssUrlPrefix + 'technologies/open-source/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_11=g_navNode_0.addNode('ocomen-php','PHP',ssUrlPrefix + 'technologies/php/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_12=g_navNode_0.addNode('ocomen-rfid','RFID',ssUrlPrefix + 'technologies/rfid/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_13=g_navNode_0.addNode('ocomen-saas','SaaS',ssUrlPrefix + 'technologies/saas/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_14=g_navNode_0.addNode('ocomen_java','Oracle \x26 Java',ssUrlPrefix + 'technologies/java/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_15=g_navNode_0.addNode('ocomen_linux','Oracle  Linux',ssUrlPrefix + 'technologies/linux/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/solutions/performance-scalability/index.html');
g_navNode_0_15_0=g_navNode_0_15.addNode('ocomen-linux-custsucc','Customer Successes',ssUrlPrefix + 'technologies/linux/customer-succ/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/customers/technologies/linux.html');
g_navNode_0_15_1=g_navNode_0_15.addNode('ocomen-partner-linux','PartnerNetwork for Linux',ssUrlPrefix + 'technologies/linux/partnernetwork-linux/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/partners/en/knowledge-zone/database/040008.htm');
g_navNode_0_15_2=g_navNode_0_15.addNode('ocomen-linuxtraining','Linux Training',ssUrlPrefix + 'technologies/linux/linux-training/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/global/us/education/linux/training.html');
g_navNode_0_15_3=g_navNode_0_15.addNode('ocomen-linux-bench','Linux Benchmarks',ssUrlPrefix + 'technologies/linux/linux-benchmarks/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/solutions/performance-scalability/index.html');
g_navNode_0_15_4=g_navNode_0_15.addNode('ocomen-linux-techcenter','Linux Tech Center',ssUrlPrefix + 'technologies/linux/linux-techcenter/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technology/tech/linux/index.html');
g_navNode_0_15_5=g_navNode_0_15.addNode('ocomen-linux-validconfig','Validated Configurations',ssUrlPrefix + 'technologies/linux/validated-configurations/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technetwork/topics/linux/validated-configurations-085828.html');
g_navNode_0_15_6=g_navNode_0_15.addNode('ocomen-linux-mgmt-pack','Management Pack for Linux',ssUrlPrefix + 'technologies/linux/managementpack-linux/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technetwork/oem/grid-control/omp-linux-091367.html');
g_navNode_0_15_7=g_navNode_0_15.addNode('ocomen-linux-cluster','Clusterware for Linux',ssUrlPrefix + 'technologies/linux/cluster/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technetwork/database/clusterware-for-unbreakable-linux-088663.html');
g_navNode_0_15_8=g_navNode_0_15.addNode('ocomen-linux-OracleVM','Oracle VM',ssUrlPrefix + 'technologies/linux/virtulaization/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/virtualization/oraclevm/index.html');
g_navNode_0_15_9=g_navNode_0_15.addNode('ocomen_linux_opensource','Open Source',ssUrlPrefix + 'technologies/linux/Open-Source/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/us/technologies/open-source/index.htm');
g_navNode_0_16=g_navNode_0.addNode('ocomen_oraclesap','Oracle \x26 SAP',ssUrlPrefix + 'technologies/oraclesap/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/us/solutions/sap/index.html');
g_navNode_0_17=g_navNode_0.addNode('ocomen_virtualization','Oracle Virtualization',ssUrlPrefix + 'technologies/virtualization/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_17_0=g_navNode_0_17.addNode('ocomen_oraclevm','Oracle VM',ssUrlPrefix + 'technologies/virtualization/oraclevm/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_17_1=g_navNode_0_17.addNode('ocomen-virtu-tech-center','Virtualization Technology Center',ssUrlPrefix + 'technologies/virtualization/virtu-tech-center/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technology/tech/virtualization/index.html');
g_navNode_0_17_2=g_navNode_0_17.addNode('ocomen-vm-grid-comput','Grid Computing',ssUrlPrefix + 'technologies/virtualization/grid/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/grid/index.htm');
g_navNode_0_17_3=g_navNode_0_17.addNode('ocomen-vm-linux','Oracle \x26 Linux',ssUrlPrefix + 'technologies/virtualization/linux/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/linux/index.htm');
g_navNode_0_17_4=g_navNode_0_17.addNode('ocomen-vm-opensource','Oracle \x26 Open Source',ssUrlPrefix + 'technologies/virtualization/open-source/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/open-source/index.htm');
g_navNode_0_18=g_navNode_0.addNode('ocomen_security','Security',ssUrlPrefix + 'technologies/security/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/security/index.html');
g_navNode_0_19=g_navNode_0.addNode('ocomen_soa','Service-Oriented Architecture',ssUrlPrefix + 'technologies/soa/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_19_0=g_navNode_0_19.addNode('ocomen-soa-suite','SOA Suite',ssUrlPrefix + 'technologies/soa/soa-suite/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technologies/soa/soa-suite.html');
g_navNode_0_19_1=g_navNode_0_19.addNode('ocomen-soa-bpm','Business Process Management',ssUrlPrefix + 'technologies/soa/bpm/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/bpm/index.htm');
g_navNode_0_19_2=g_navNode_0_19.addNode('ocomen_soagovnce','SOA Governance',ssUrlPrefix + 'technologies/soa/soa-governance/index.html','secondaryUrlVariableField==MainContent');
g_navNode_0_19_3=g_navNode_0_19.addNode('ocomen-appintarch','Application Integration Architecture',ssUrlPrefix + 'technologies/soa/application-integration-architecture/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/applications/application-integration-architecture/index.htm');
g_navNode_0_19_4=g_navNode_0_19.addNode('ocomen-servciebus','Service Bus',ssUrlPrefix + 'technologies/soa/service-bus/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technologies/soa/service-bus.html');
g_navNode_0_19_5=g_navNode_0_19.addNode('ocomen-service-bus-fsi','Service Bus for Financial Services',ssUrlPrefix + 'technologies/soa/service-bus-fsi/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technologies/soa/service-bus-fsi.html');
g_navNode_0_19_6=g_navNode_0_19.addNode('ocomen-soa-eda','Event-Driven Architecture \x28EDA\x29',ssUrlPrefix + 'technologies/soa/eda/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technologies/soa/eda/index.html');
g_navNode_0_19_7=g_navNode_0_19.addNode('ocomen-soa-edasuite','EDA Suite',ssUrlPrefix + 'technologies/soa/eda-suite/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technologies/soa/eda/eda-suite.html');
g_navNode_0_19_8=g_navNode_0_19.addNode('ocomen-soa-compeventproc','Complex Event Processing',ssUrlPrefix + 'technologies/soa/complex-event-processing/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technologies/soa/complex-event-processing.html');
g_navNode_0_19_9=g_navNode_0_19.addNode('ocomen-soa-rsccenter','Resource Center',ssUrlPrefix + 'technologies/soa/resource-center/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technologies/soa/center.html');
g_navNode_0_21=g_navNode_0.addNode('ocomen_oraclesolaris','Oracle Solaris',ssUrlPrefix + 'technologies/solaris/index.html','ssRedirectURL==/us/products/servers-storage/solaris/index.html');
g_navNode_1=g_navNode_Root.addNode('ocomen-productsandservices','Products and Services',ssUrlPrefix + 'products/index.html','secondaryUrlVariableField==MainContent','ssManagerAccount==MKTG_ADMIN/OCOM_ADMIN');
g_navNode_1_0=g_navNode_1.addNode('ocomen_database','Oracle Database',ssUrlPrefix + 'products/database/index.html','secondaryUrlVariableField==MainContent','ssManagerAccount==MKTG_ADMIN/OCOM_ADMIN');
g_navNode_1_0_0=g_navNode_1_0.addNode('ocomen_enterpriseoptions','Database Options',ssUrlPrefix + 'products/database/options/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/database/database-options.html');
g_navNode_1_0_0_0=g_navNode_1_0_0.addNode('ocomen_realapplicationclusters','Real Application Clusters',ssUrlPrefix + 'products/database/options/real-application-clusters/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_0_0_1=g_navNode_1_0_0.addNode('ocomen_raconenote','RAC One Node',ssUrlPrefix + 'products/database/options/rac-one-node/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/database/rac-one-node.html');
g_navNode_1_0_0_2=g_navNode_1_0_0.addNode('ocomen_realapplicationtesting','Real Application Testing',ssUrlPrefix + 'products/database/options/real-application-testing/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/database/real-application-testing.html');
g_navNode_1_0_0_3=g_navNode_1_0_0.addNode('ocomen_activedataguard','Active Data Guard',ssUrlPrefix + 'products/database/options/active-data-guard/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/us/products/database/options/active-data-guard/index.htm');
g_navNode_1_0_0_4=g_navNode_1_0_0.addNode('ocomen_advancedcompression','Advanced Compression',ssUrlPrefix + 'products/database/options/advanced-compression/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/database/advanced-compression.html');
g_navNode_1_0_0_5=g_navNode_1_0_0.addNode('ocomen_inmemorydbcache','In-Memory DB Cache',ssUrlPrefix + 'products/database/options/in-memory-database-cache/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/database/in-memory-database-cache.html');
g_navNode_1_0_0_6=g_navNode_1_0_0.addNode('ocomen_totalrecall','Total Recall',ssUrlPrefix + 'products/database/options/total-recall/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_0_0_7=g_navNode_1_0_0.addNode('ocomen_manageability','Manageability',ssUrlPrefix + 'products/database/options/db-manageability/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/us/products/enterprise-manager/database-management/index.html');
g_navNode_1_0_0_8=g_navNode_1_0_0.addNode('ocomen_partitioning','Partitioning',ssUrlPrefix + 'products/database/options/partitioning/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/solutions/business_intelligence/partitioning.html');
g_navNode_1_0_0_9=g_navNode_1_0_0.addNode('ocomen_olap','OLAP',ssUrlPrefix + 'products/database/options/olap/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/solutions/business_intelligence/olap.html');
g_navNode_1_0_0_10=g_navNode_1_0_0.addNode('ocomen_datamining','Data Mining',ssUrlPrefix + 'products/database/options/data-mining/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_0_0_11=g_navNode_1_0_0.addNode('ocomen_retaildatamodel','Retail Data Model',ssUrlPrefix + 'products/database/options/retail-data-model/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/database/retail-data-model.html');
g_navNode_1_0_0_12=g_navNode_1_0_0.addNode('ocomen_databasevault','Database Vault',ssUrlPrefix + 'products/database/options/database-vault/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/database/database-vault.html');
g_navNode_1_0_0_13=g_navNode_1_0_0.addNode('ocomen_advancedsecurity','Advanced Security',ssUrlPrefix + 'products/database/options/advanced-security/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/database/advanced-security.html');
g_navNode_1_0_0_14=g_navNode_1_0_0.addNode('ocomen_labelsecurity','Label Security',ssUrlPrefix + 'products/database/options/label-security/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/database/label-security.html');
g_navNode_1_0_0_15=g_navNode_1_0_0.addNode('ocomen_spatial','Spatial',ssUrlPrefix + 'products/database/options/spatial/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_0_1=g_navNode_1_0.addNode('ocomen_enterpriseedition','Enterprise Edition',ssUrlPrefix + 'products/database/enterprise-edition/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/database/enterprise_edition.html');
g_navNode_1_0_2=g_navNode_1_0.addNode('ocomen_standardedition','Standard Edition ',ssUrlPrefix + 'products/database/StandardEdition/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/database/standard_edition.html');
g_navNode_1_0_3=g_navNode_1_0.addNode('ocomen_standardeditionone','Standard Edition One',ssUrlPrefix + 'products/database/std-one/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/database/std_one.html');
g_navNode_1_0_4=g_navNode_1_0.addNode('ocomen_expressedition','Express Edition',ssUrlPrefix + 'products/database/express-edition/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technology/products/database/xe/index.html');
g_navNode_1_0_5=g_navNode_1_0.addNode('ocomen_databasesecurity','Database Security',ssUrlPrefix + 'products/database/security/index.html','secondaryUrlVariableField==MainContent','ssManagerAccount==MKTG_ADMIN/OCOM_ADMIN');
g_navNode_1_0_7=g_navNode_1_0.addNode('ocomen_timesteninmemory','TimesTen In-Memory Database',ssUrlPrefix + 'products/database/timesten/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/database/timesten.html');
g_navNode_1_0_8=g_navNode_1_0.addNode('ocomen_berkeleydb','Berkeley DB',ssUrlPrefix + 'products/database/berkeley-db/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/database/berkeley-db/index.html');
g_navNode_1_0_8_0=g_navNode_1_0_8.addNode('ocomen_berkeleydbdb','DB',ssUrlPrefix + 'products/database/berkeley-db/db/index.html');
g_navNode_1_0_8_1=g_navNode_1_0_8.addNode('ocomen_berkeleydbje','JE',ssUrlPrefix + 'products/database/berkeley-db/je/index.html');
g_navNode_1_0_8_2=g_navNode_1_0_8.addNode('ocomen_berkeleydbxml','XML',ssUrlPrefix + 'products/database/berkeley-db/xml/index.html');
g_navNode_1_0_9=g_navNode_1_0.addNode('ocomen_databaselite','Database Lite Mobile Server',ssUrlPrefix + 'products/database/lite-edition/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/database/lite_edition.html');
g_navNode_1_0_10=g_navNode_1_0.addNode('ocomen_databasemysql','MySQL',ssUrlPrefix + 'products/database/mysql/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/mysql/index.html');
g_navNode_1_0_11=g_navNode_1_0.addNode('ocomen_securebackup','Secure Backup',ssUrlPrefix + 'products/database/secure-backup/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/database/secure-backup.html');
g_navNode_1_0_12=g_navNode_1_0.addNode('comen_cloudfs','Cloud File System',ssUrlPrefix + 'products/database/cloud-file-system/index.html','contributorOnly==false','secondaryUrlVariableField==MainContent');
g_navNode_1_0_13=g_navNode_1_0.addNode('ocomen_secureenterprisesearch','Secure Enterprise Search',ssUrlPrefix + 'products/database/secure-enterprise-search/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/database/secure-enterprise-search.html');
g_navNode_1_0_14=g_navNode_1_0.addNode('ocomen_dataintegration','Data Integration',ssUrlPrefix + 'products/database/data-integration/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/data-integration/index.html');
g_navNode_1_0_15=g_navNode_1_0.addNode('ocomen_databasemachine','Exadata Database Machine',ssUrlPrefix + 'products/database/database-machine/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/database/database-machine.html');
g_navNode_1_0_17=g_navNode_1_0.addNode('ocomen_benchmarks','Benchmarks',ssUrlPrefix + 'products/database/benchmarks/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/solutions/performance-scalability/index.html');
g_navNode_1_0_18=g_navNode_1_0.addNode('ocomen_databasecustomers','Customers',ssUrlPrefix + 'products/database/customers/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/customers/products/database.html');
g_navNode_1_1=g_navNode_1.addNode('ocomen_fusionmiddleware','Oracle Fusion Middleware',ssUrlPrefix + 'products/middleware/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/index.html');
g_navNode_1_1_0=g_navNode_1_1.addNode('ocomen_appgrid','Application Grid',ssUrlPrefix + 'products/middleware/application-grid/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_0_0=g_navNode_1_1_0.addNode('ocomen-appserver','Application Server',ssUrlPrefix + 'products/middleware/application-grid/appserver/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/application-server/index.html');
g_navNode_1_1_0_1=g_navNode_1_1_0.addNode('ocomen-bus-inte','Business Intelligence',ssUrlPrefix + 'products/middleware/application-grid/bus-int/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/solutions/business-intelligence/');
g_navNode_1_1_0_2=g_navNode_1_1_0.addNode('ocomen-bus-process-mgmt','Business Process Management',ssUrlPrefix + 'products/middleware/application-grid/bus-pro-mgmt/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/bpm/index.htm');
g_navNode_1_1_0_3=g_navNode_1_1_0.addNode('ocomen-collab','Collaboration',ssUrlPrefix + 'products/middleware/application-grid/collaboration/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/beehive/');
g_navNode_1_1_0_4=g_navNode_1_1_0.addNode('ocomen-app-content-mgmt','Content Management',ssUrlPrefix + 'products/middleware/application-grid/content-management/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/content-management/index.htm');
g_navNode_1_1_0_5=g_navNode_1_1_0.addNode('ocomen-data-integration','Data Integration',ssUrlPrefix + 'products/middleware/application-grid/data-integration/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/data-integration/index.htm');
g_navNode_1_1_0_6=g_navNode_1_1_0.addNode('ocomen-app-tools','Developer Tools',ssUrlPrefix + 'products/middleware/application-grid/tools/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/tools/index.htm');
g_navNode_1_1_0_7=g_navNode_1_1_0.addNode('ocomen_app-grid-soa','Event-Driven Architecture',ssUrlPrefix + 'products/middleware/application-grid/soa/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/soa/index.htm');
g_navNode_1_1_0_8=g_navNode_1_1_0.addNode('ocomen-app-grid-coherence','In-Memory Data Grid',ssUrlPrefix + 'products/middleware/application-grid/coherence/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/coherence/index.htm');
g_navNode_1_1_0_9=g_navNode_1_1_0.addNode('ocomen-app-grid-middleware-app','Middleware for Applications',ssUrlPrefix + 'products/middleware/application-grid/middleware-for-applications/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/middleware-for-applications/index.htm');
g_navNode_1_1_0_10=g_navNode_1_1_0.addNode('ocomen-app-grid-user-interacti','Portal, User Experience, \x26 Enterprise 2.0',ssUrlPrefix + 'products/middleware/application-grid/user-interaction/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/user-interaction/index.htm');
g_navNode_1_1_0_11=g_navNode_1_1_0.addNode('ocomen-app-grid-soa','Service-Oriented Architecture',ssUrlPrefix + 'products/middleware/application-grid/soa/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/soa/index.htm');
g_navNode_1_1_0_12=g_navNode_1_1_0.addNode('ocomen-app-grid-soa-governance','SOA Governance',ssUrlPrefix + 'products/middleware/application-grid/soa-governance/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/soa/soa-governance/');
g_navNode_1_1_0_13=g_navNode_1_1_0.addNode('ocomen-app-grid-tuxedo','Transaction Processing',ssUrlPrefix + 'products/middleware/application-grid/tuxedo/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/tuxedo/index.htm');
g_navNode_1_1_0_14=g_navNode_1_1_0.addNode('ocomen_identity_management','Identity Management',ssUrlPrefix + 'products/middleware/application-grid/identity-management/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/identity-management/index.htm');
g_navNode_1_1_1=g_navNode_1_1.addNode('ocomen_busint','Business Intelligence',ssUrlPrefix + 'products/middleware/bus-int/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/appserver/business-intelligence/index.html');
g_navNode_1_1_1_0=g_navNode_1_1_1.addNode('ocomen_crystalball','Crystal Ball',ssUrlPrefix + 'products/middleware/bus-int/crystalball/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_2=g_navNode_1_1.addNode('ocomen_middlewarebpm','Business Process Management',ssUrlPrefix + 'products/middleware/bpm/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/bpm/index.htm');
g_navNode_1_1_3=g_navNode_1_1.addNode('ocomen_beehive','Collaboration',ssUrlPrefix + 'products/middleware/beehive/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_3_0=g_navNode_1_1_3.addNode('ocomen-colb-application-server','Application Server',ssUrlPrefix + 'products/middleware/beehive/application-server/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/appserver/index.html');
g_navNode_1_1_3_1=g_navNode_1_1_3.addNode('ocomen-colb-business-intellig','Business Intelligence',ssUrlPrefix + 'products/middleware/beehive/business-intelligence/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/solutions/business_intelligence/index.html');
g_navNode_1_1_3_2=g_navNode_1_1_3.addNode('ocomen-colb-bpm','Business Process Management',ssUrlPrefix + 'products/middleware/beehive/bpm/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/bpm/');
g_navNode_1_1_3_3=g_navNode_1_1_3.addNode('ocomen-colb-collaboration','Collaboration',ssUrlPrefix + 'products/middleware/beehive/collaboration/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/beehive/index.html');
g_navNode_1_1_3_4=g_navNode_1_1_3.addNode('ocomen-colb-content-management','Content Management',ssUrlPrefix + 'products/middleware/beehive/content-management/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/content-management/');
g_navNode_1_1_3_5=g_navNode_1_1_3.addNode('ocomen-colb-data-integration','Data Integration',ssUrlPrefix + 'products/middleware/beehive/data-integration/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/data-integration/');
g_navNode_1_1_3_6=g_navNode_1_1_3.addNode('ocomen-dev-tools-c','Developer Tools',ssUrlPrefix + 'products/middleware/beehive/dev-tools/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/tools/index.htm');
g_navNode_1_1_3_7=g_navNode_1_1_3.addNode('ocomen-eda-c','Event-Driven Architecture ',ssUrlPrefix + 'products/middleware/beehive/eda/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technologies/soa/eda/index.html');
g_navNode_1_1_3_8=g_navNode_1_1_3.addNode('ocomen_identitymgmt','Identity Management ',ssUrlPrefix + 'products/middleware/beehive/identity-management/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/identity-management/index.htm');
g_navNode_1_1_3_9=g_navNode_1_1_3.addNode('ocomen-in-memory-data-grid-c','In-Memory Data Grid',ssUrlPrefix + 'products/middleware/beehive/in-memory-data-grid/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/coherence/index.htm');
g_navNode_1_1_3_10=g_navNode_1_1_3.addNode('ocomen-mid-apps-c','Middleware for Applications',ssUrlPrefix + 'products/middleware/beehive/mid-apps/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/middleware-for-applications/index.htm');
g_navNode_1_1_3_11=g_navNode_1_1_3.addNode('ocomen-portal-ui-ent2-c','Portal, User Experience, \x26 Enterprise 2.0',ssUrlPrefix + 'products/middleware/beehive/portal-ui-ent2/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/user-interaction/index.htm');
g_navNode_1_1_3_12=g_navNode_1_1_3.addNode('ocomen-soa-c','Service-Oriented Architecture',ssUrlPrefix + 'products/middleware/beehive/soa/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/soa/index.htm');
g_navNode_1_1_3_13=g_navNode_1_1_3.addNode('ocomen-soa-governance-c','SOA Governance',ssUrlPrefix + 'products/middleware/beehive/soa-governance/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/soa/soa-governance/');
g_navNode_1_1_3_14=g_navNode_1_1_3.addNode('ocomen-transaction-processingc','Transaction Processing',ssUrlPrefix + 'products/middleware/beehive/transaction-processing/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/tuxedo/index.htm');
g_navNode_1_1_4=g_navNode_1_1.addNode('ocomen_contentmgmt','Content Management',ssUrlPrefix + 'products/middleware/content-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_4_0=g_navNode_1_1_4.addNode('ocomen-ucm-overview','Universal Content Management Overview',ssUrlPrefix + 'products/middleware/content-management/ucm-overview/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/content-management/universal-content-management.html');
g_navNode_1_1_4_1=g_navNode_1_1_4.addNode('ocomen-web-content-mgmt','Web Content Management',ssUrlPrefix + 'products/middleware/content-management/web-content-mgmt/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/content-management/web-content-management.html');
g_navNode_1_1_4_2=g_navNode_1_1_4.addNode('ocomen-document-mgmt','Document Management',ssUrlPrefix + 'products/middleware/content-management/document-mgmt/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/content-management/document-management.html');
g_navNode_1_1_4_3=g_navNode_1_1_4.addNode('ocomen-digital-asset-mgmt','Digital Asset Management',ssUrlPrefix + 'products/middleware/content-management/digital-asset-mgmt/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/content-management/digital-asset-management.html');
g_navNode_1_1_4_5=g_navNode_1_1_4.addNode('ocomen-universal-records-mgmt','Universal Records Management',ssUrlPrefix + 'products/middleware/content-management/universal-records-mgmt/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/content-management/universal-records-management.html');
g_navNode_1_1_4_6=g_navNode_1_1_4.addNode('ocomen-imaging-process-mgmt','Imaging and Process Management',ssUrlPrefix + 'products/middleware/content-management/imaging-process-mgmt/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/content-management/image-process-management.html');
g_navNode_1_1_4_7=g_navNode_1_1_4.addNode('ocomen-information-rights-mgmt','Information Rights Management ',ssUrlPrefix + 'products/middleware/content-management/information-rights-mgmt/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/content-management/information-rights-management.html');
g_navNode_1_1_4_8=g_navNode_1_1_4.addNode('ocomen-outside-in-tech','Outside In Technology ',ssUrlPrefix + 'products/middleware/content-management/outside-in-tech/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technologies/embedded/outside-in.html');
g_navNode_1_1_4_9=g_navNode_1_1_4.addNode('ocomen-document-capture','Document Capture',ssUrlPrefix + 'products/middleware/content-management/document-capture/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/content-management/document-capture.html');
g_navNode_1_1_4_10=g_navNode_1_1_4.addNode('ocomen_formsrecognition','Forms Recognition',ssUrlPrefix + 'products/middleware/content-management/forums-recognition/index.html');
g_navNode_1_1_5=g_navNode_1_1.addNode('ocomen_dataint','Data Integration',ssUrlPrefix + 'products/middleware/data-integration/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_5_0=g_navNode_1_1_5.addNode('ocomen_dataintegratorenterpris','Data Integrator Enterprise Edition',ssUrlPrefix + 'products/middleware/data-integration/enterprise-edition/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_5_1=g_navNode_1_1_5.addNode('ocomen_dataintegrationsuite','Data Integration Suite',ssUrlPrefix + 'products/middleware/data-integration/data-integration-suite/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_5_2=g_navNode_1_1_5.addNode('ocomen_dataqualityprofiling','Data Quality and Profiling',ssUrlPrefix + 'products/middleware/data-integration/data-quality-profiling/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_5_3=g_navNode_1_1_5.addNode('ocomen_dataserviceintegrator','Data Service Integrator',ssUrlPrefix + 'products/middleware/data-integration/data-service-integrator/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_5_4=g_navNode_1_1_5.addNode('ocomen_productdataquality','Product Data Quality',ssUrlPrefix + 'products/middleware/data-integration/data-quality/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_5_5=g_navNode_1_1_5.addNode('ocomen_goldengate','GoldenGate',ssUrlPrefix + 'products/middleware/data-integration/goldengate/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_5_6=g_navNode_1_1_5.addNode('ocomen_goldengateveridata','GoldenGate Veridata',ssUrlPrefix + 'products/middleware/data-integration/goldengate-veridata/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_5_7=g_navNode_1_1_5.addNode('ocomen_managementpack','Management Pack for Oracle GoldenGate',ssUrlPrefix + 'products/middleware/data-integration/management-pack/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_6=g_navNode_1_1.addNode('ocomen_developertools','Developer Tools',ssUrlPrefix + 'products/middleware/tools/index.html','ssRedirectURL==/us/products/tools/index.htm');
g_navNode_1_1_6_0=g_navNode_1_1_6.addNode('ocomen-tools-spring','Developer Kit for Spring',ssUrlPrefix + 'products/middleware/tools/spring/index.html');
g_navNode_1_1_6_1=g_navNode_1_1_6.addNode('ocomen-developer-suite','Developer Suite',ssUrlPrefix + 'products/middleware/tools/developer-suite/index.html');
g_navNode_1_1_6_2=g_navNode_1_1_6.addNode('ocomen-enterprise-pack-eclipse','Enterprise Pack for Eclipse',ssUrlPrefix + 'products/middleware/tools/eclipse/index.html');
g_navNode_1_1_6_3=g_navNode_1_1_6.addNode('ocomen-forms','Forms',ssUrlPrefix + 'products/middleware/tools/forms/index.html');
g_navNode_1_1_6_4=g_navNode_1_1_6.addNode('ocomen-jdeveloper','JDeveloper',ssUrlPrefix + 'products/middleware/tools/jdeveloper/index.html');
g_navNode_1_1_6_5=g_navNode_1_1_6.addNode('ocomen-toplink-adf','Toplink and ADF',ssUrlPrefix + 'products/middleware/tools/toplink-adf/index.html');
g_navNode_1_1_7=g_navNode_1_1.addNode('ocomen_middlewareeda','Event-Driven Architecture',ssUrlPrefix + 'products/middleware/eda/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technologies/soa/eda/index.html');
g_navNode_1_1_8=g_navNode_1_1.addNode('ocomen_exalogic','Exalogic',ssUrlPrefix + 'products/middleware/exalogic/index.html');
g_navNode_1_1_9=g_navNode_1_1.addNode('ocomen_idntmgmt','Identity Management',ssUrlPrefix + 'products/middleware/identity-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_9_3=g_navNode_1_1_9.addNode('ocomen-oiam','Oracle Identity \x26 Access Management Suite Plus',ssUrlPrefix + 'products/middleware/identity-management/oiam/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/identity-management/identity-access-management-suite.html');
g_navNode_1_1_9_4=g_navNode_1_1_9.addNode('ocomen-oracle-access-mgmt','Oracle Access Management Suite Plus ',ssUrlPrefix + 'products/middleware/identity-management/oracle-access-mgmt/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/identity-management/access-management-suite.html');
g_navNode_1_1_9_5=g_navNode_1_1_9.addNode('ocomen-oracle-access-manager','Oracle Access Manager',ssUrlPrefix + 'products/middleware/identity-management/oracle-access-manager/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/identity-management/access-manager.html');
g_navNode_1_1_9_6=g_navNode_1_1_9.addNode('ocomen-oracle-ada-access-mgr','Oracle Adaptive Access Manager',ssUrlPrefix + 'products/middleware/identity-management/oracle-ada-access-mgr/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/identity-management/adaptive-access-manager.html');
g_navNode_1_1_9_7=g_navNode_1_1_9.addNode('ocomen_oracledirectoryservices','Oracle Directory Services Plus',ssUrlPrefix + 'products/middleware/identity-management/oracle-directory-services/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/identity-management/directory-services.html');
g_navNode_1_1_9_8=g_navNode_1_1_9.addNode('ocomen-oracle-enterprise-sso','Oracle Enterprise Single Sign-On Suite Plus',ssUrlPrefix + 'products/middleware/identity-management/oracle-enterprise-sso/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/identity-management/enterprise-single-sign-on.html');
g_navNode_1_1_9_9=g_navNode_1_1_9.addNode('ocomen-oracle-entitlements-ser','Oracle Entitlements Server',ssUrlPrefix + 'products/middleware/identity-management/oracle-entitlements-server/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/identity-management/entitlements-server.html');
g_navNode_1_1_9_10=g_navNode_1_1_9.addNode('ocomen_oracleidentityanalytics','Oracle Identity Analytics',ssUrlPrefix + 'products/middleware/identity-management/oracle-identity-analytics/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_9_11=g_navNode_1_1_9.addNode('ocomen-oracle-identity-federat','Oracle Identity Federation',ssUrlPrefix + 'products/middleware/identity-management/oracle-identity-federation/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/identity-management/identity-federation.html');
g_navNode_1_1_9_12=g_navNode_1_1_9.addNode('ocomen-oracle-identity-manager','Oracle Identity Manager',ssUrlPrefix + 'products/middleware/identity-management/oracle-identity-manager/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/identity-management/identity-manager.html');
g_navNode_1_1_9_13=g_navNode_1_1_9.addNode('ocomen_informationrightmgmt','Oracle Information Rights Management ',ssUrlPrefix + 'products/middleware/identity-management/information-rights-mgmt/index.html');
g_navNode_1_1_9_14=g_navNode_1_1_9.addNode('ocomen-oracle-mgmt-pack-for-im','Oracle Management Pack for Identity Management ',ssUrlPrefix + 'products/middleware/identity-management/oracle-mgmt-pack-for-im/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/identity-management/management-monitoring.html');
g_navNode_1_1_9_15=g_navNode_1_1_9.addNode('ocomen-oracle-role-manager','Oracle Role Manager',ssUrlPrefix + 'products/middleware/identity-management/oracle-role-manager/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/identity-management/role-manager.html');
g_navNode_1_1_9_16=g_navNode_1_1_9.addNode('ocomen-oracle-web-services-mgr','Oracle Web Services Manager',ssUrlPrefix + 'products/middleware/identity-management/oracle-web-services-mgr/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/identity-management/web-services-manager.html');
g_navNode_1_1_9_17=g_navNode_1_1_9.addNode('ocomen-extended-idm-ecosystem','Oracle Extended IdM Ecosystem',ssUrlPrefix + 'products/middleware/identity-management/extended-idm-ecosystem/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/identity-management/ecosystem.html');
g_navNode_1_1_9_18=g_navNode_1_1_9.addNode('ocomen-resource-library','Resource Library',ssUrlPrefix + 'products/middleware/identity-management/resource-library/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/identity-management/resource-library.html');
g_navNode_1_1_10=g_navNode_1_1.addNode('ocomen_coherence','In-Memory Data Grid',ssUrlPrefix + 'products/middleware/coherence/index.html','secondaryUrlVariableField==MainContent','ssManagerAccount==MKTG_ADMIN/OCOM_ADMIN');
g_navNode_1_1_10_0=g_navNode_1_1_10.addNode('ocomen-coherence-grid-edition','Coherence Grid Edition',ssUrlPrefix + 'products/middleware/coherence/coherence-grid-edition/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_10_1=g_navNode_1_1_10.addNode('ocomen-coherence-ent-edition','Coherence Enterprise Edition',ssUrlPrefix + 'products/middleware/coherence/coherence-ent-edition/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_10_2=g_navNode_1_1_10.addNode('ocomen-coherence-std-edition','Coherence Standard Edition',ssUrlPrefix + 'products/middleware/coherence/coherence-std-edition/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_10_3=g_navNode_1_1_10.addNode('ocomen-weblogic-suite','WebLogic Suite',ssUrlPrefix + 'products/middleware/coherence/weblogic-suite/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_11=g_navNode_1_1.addNode('ocomen_javaprod','Oracle Java Products',ssUrlPrefix + 'products/middleware/java/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_12=g_navNode_1_1.addNode('ocome_midwreapp','Oracle Fusion Middleware for Applications',ssUrlPrefix + 'products/middleware/middleware-for-applications/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_12_0=g_navNode_1_1_12.addNode('ocomen-app-server','Application Server',ssUrlPrefix + 'products/middleware/middleware-for-applications/app-server/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/application-server/index.htm');
g_navNode_1_1_12_1=g_navNode_1_1_12.addNode('ocomen-business-intelligence-m','Business Intelligence',ssUrlPrefix + 'products/middleware/middleware-for-applications/business-intelligence/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/solutions/ent-performance-bi/index.htm');
g_navNode_1_1_12_2=g_navNode_1_1_12.addNode('ocomen-bpm-m','Business Process Management ',ssUrlPrefix + 'products/middleware/middleware-for-applications/bpm/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/bpm/');
g_navNode_1_1_12_3=g_navNode_1_1_12.addNode('ocomen-collaboration-m','Collaboration',ssUrlPrefix + 'products/middleware/middleware-for-applications/collaboration/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/beehive/collaboration/index.htm');
g_navNode_1_1_12_4=g_navNode_1_1_12.addNode('ocomen-content-mgmt-m','Content Management ',ssUrlPrefix + 'products/middleware/middleware-for-applications/content-mgmt/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/content-management/');
g_navNode_1_1_12_5=g_navNode_1_1_12.addNode('ocomen-data-integration-m','Data Integration',ssUrlPrefix + 'products/middleware/middleware-for-applications/data-integration/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/data-integration/');
g_navNode_1_1_12_6=g_navNode_1_1_12.addNode('ocomen-dev-tools-m','Developer Tools',ssUrlPrefix + 'products/middleware/middleware-for-applications/dev-tools/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/us/products/tools/index.htm');
g_navNode_1_1_12_7=g_navNode_1_1_12.addNode('ocomen-eds-m','Event-Driven Architecture',ssUrlPrefix + 'products/middleware/middleware-for-applications/eda/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technologies/soa/eda/index.html');
g_navNode_1_1_12_8=g_navNode_1_1_12.addNode('ocomen-identity-mgmt-m','Identity Management',ssUrlPrefix + 'products/middleware/middleware-for-applications/identity-mgmt/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/identity-management/index.htm');
g_navNode_1_1_12_9=g_navNode_1_1_12.addNode('ocomen-in-memory-data-grid-m','In-Memory Data Grid',ssUrlPrefix + 'products/middleware/middleware-for-applications/in-memory-data-grid/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/coherence/index.htm');
g_navNode_1_1_12_10=g_navNode_1_1_12.addNode('ocomen-mid-for-apps','Middleware for Application',ssUrlPrefix + 'products/middleware/middleware-for-applications/mid-for-apps/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/middleware-for-applications/index.htm');
g_navNode_1_1_12_11=g_navNode_1_1_12.addNode('ocomen-portal-ui-ent2','Portal, User Experience, \x26 Enterprise 2.0',ssUrlPrefix + 'products/middleware/middleware-for-applications/portal-ui-ent2/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/user-interaction/index.htm');
g_navNode_1_1_12_12=g_navNode_1_1_12.addNode('ocomen-soa-m','Service-Oriented Architecture ',ssUrlPrefix + 'products/middleware/middleware-for-applications/soa/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/soa/index.htm');
g_navNode_1_1_12_13=g_navNode_1_1_12.addNode('ocomen-soa-governance-m','SOA Governance',ssUrlPrefix + 'products/middleware/middleware-for-applications/soa-governance/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/soa/soa-governance/');
g_navNode_1_1_12_14=g_navNode_1_1_12.addNode('ocomen-transaction-processingm','Transaction Processing ',ssUrlPrefix + 'products/middleware/middleware-for-applications/transaction-processing/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/middleware/tuxedo/index.htm');
g_navNode_1_1_13=g_navNode_1_1.addNode('ocomen_userinteraction','Portal, User Experience, and Enterprise 2.0',ssUrlPrefix + 'products/middleware/user-interaction/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_13_0=g_navNode_1_1_13.addNode('ocomen-webcenter-suite','WebCenter Suite',ssUrlPrefix + 'products/middleware/user-interaction/webcenter-suite/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/user-interaction/webcenter-suite.html');
g_navNode_1_1_13_1=g_navNode_1_1_13.addNode('ocomen-webcenter-services','WebCenter Services',ssUrlPrefix + 'products/middleware/user-interaction/webcenter-services/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/user-interaction/webcenter-services.html');
g_navNode_1_1_13_2=g_navNode_1_1_13.addNode('ocomen_intelligentcollaborati','WebCenter Intelligent Collaboration',ssUrlPrefix + 'products/middleware/user-interaction/intelligent-collaboration/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_13_3=g_navNode_1_1_13.addNode('ocomen_realtimecollaboration','WebCenter Real-Time Collaboration',ssUrlPrefix + 'products/middleware/user-interaction/real-time-collaboration/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_14=g_navNode_1_1.addNode('ocomen_middlewaresoa','Service-Oriented Architecture',ssUrlPrefix + 'products/middleware/soa/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/soa/index.htm');
g_navNode_1_1_15=g_navNode_1_1.addNode('ocomen_soagov','SOA Governance',ssUrlPrefix + 'products/middleware/soa-governance/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/soa/soa-governance/index.htm');
g_navNode_1_1_16=g_navNode_1_1.addNode('ocomen_tuxedo','Transaction Processing',ssUrlPrefix + 'products/middleware/tuxedo/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_16_0=g_navNode_1_1_16.addNode('ocomen-tp-tuxedo','Tuxedo',ssUrlPrefix + 'products/middleware/tuxedo/tuxedo/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/tuxedo/tuxedo.html');
g_navNode_1_1_16_1=g_navNode_1_1_16.addNode('ocomen-salt','SALT',ssUrlPrefix + 'products/middleware/tuxedo/salt/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/tuxedo/salt.html');
g_navNode_1_1_16_2=g_navNode_1_1_16.addNode('ocomen-tsam','TSAM',ssUrlPrefix + 'products/middleware/tuxedo/tsam/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/tuxedo/tsam.html');
g_navNode_1_1_16_3=g_navNode_1_1_16.addNode('ocomen-tuxedo-mainframe-adapte','Tuxedo Mainframe Adapters',ssUrlPrefix + 'products/middleware/tuxedo/tuxedo-mainframe-adapters/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/tuxedo/mainframe-adapters.html');
g_navNode_1_1_16_4=g_navNode_1_1_16.addNode('ocomen-messageq','MessageQ',ssUrlPrefix + 'products/middleware/tuxedo/messageq/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/middleware/tuxedo/messageq.html');
g_navNode_1_1_17=g_navNode_1_1.addNode('ocomen_appserver','WebLogic Server',ssUrlPrefix + 'products/middleware/application-server/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/us/appserver/index.html');
g_navNode_1_1_17_0=g_navNode_1_1_17.addNode('ocomen_appsvrweblogicsuite','Oracle WebLogic Suite',ssUrlPrefix + 'products/middleware/application-server/weblogic-suite/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/appserver/weblogic/weblogic-suite.html');
g_navNode_1_1_17_1=g_navNode_1_1_17.addNode('ocomen_appsvrstandardedition','Oracle WebLogic Server Standard Edition',ssUrlPrefix + 'products/middleware/application-server/weblogic-standard-edition/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/appserver/weblogic/standard-edition.html');
g_navNode_1_1_17_2=g_navNode_1_1_17.addNode('ocomen_appsvrenterpriseedition','Oracle WebLogic Server Enterprise Edition',ssUrlPrefix + 'products/middleware/application-server/weblogic-enterprise-edition/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/appserver/weblogic/enterprise-edition.html');
g_navNode_1_1_17_3=g_navNode_1_1_17.addNode('ocomen_appsvrjrockit','Oracle JRockit',ssUrlPrefix + 'products/middleware/application-server/jrockit/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/appserver/jrockit/index.html');
g_navNode_1_1_17_4=g_navNode_1_1_17.addNode('ocomen_appsvreedition','Oracle Application Server Enterprise Edition',ssUrlPrefix + 'products/middleware/application-server/enterprise-edition/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/appserver/enterprise_edition.html');
g_navNode_1_1_17_5=g_navNode_1_1_17.addNode('ocomen_glassfishserver','Oracle GlassFish Server',ssUrlPrefix + 'products/middleware/application-server/oracle-glassfish-server/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_17_6=g_navNode_1_1_17.addNode('ocomen_oraclewebtier','Oracle Web Tier',ssUrlPrefix + 'products/middleware/application-server/oraclewebtier/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_1_17_7=g_navNode_1_1_17.addNode('ocomen_appsvirtualization','Virtualization',ssUrlPrefix + 'products/middleware/application-server/virtualization/index.html');
g_navNode_1_2=g_navNode_1.addNode('ocomen_applications','Oracle Applications',ssUrlPrefix + 'products/applications/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_0=g_navNode_1_2.addNode('ocomen_fusion','Oracle Fusion Applications',ssUrlPrefix + 'products/applications/fusion/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_1=g_navNode_1_2.addNode('ocomen_ebusiness','Oracle E-Business Suite',ssUrlPrefix + 'products/applications/ebusiness/index.html','secondaryUrlVariableField==MainContent','ssManagerAccount==OCOM_ADMIN');
g_navNode_1_2_1_0=g_navNode_1_2_1.addNode('ocomen_ebscrm','Customer Relationship Management ',ssUrlPrefix + 'products/applications/ebusiness/crm/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_1_1=g_navNode_1_2_1.addNode('ocomen_ebsservice','Service Management',ssUrlPrefix + 'products/applications/ebusiness/service/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_1_2=g_navNode_1_2_1.addNode('ocomen_ebsfinancials','Financial Management',ssUrlPrefix + 'products/applications/ebusiness/financials/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_1_3=g_navNode_1_2_1.addNode('ocomen_ebshrm','Human Capital Management',ssUrlPrefix + 'products/applications/ebusiness/hrm/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_1_4=g_navNode_1_2_1.addNode('ocomen_ebsprojects','Project Portfolio Management',ssUrlPrefix + 'products/applications/ebusiness/projects/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_1_5=g_navNode_1_2_1.addNode('ocomen_ebsprocurement','Advanced Procurement',ssUrlPrefix + 'products/applications/ebusiness/procurement/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_1_6=g_navNode_1_2_1.addNode('ocomen-ebs-scm','Supply Chain Management',ssUrlPrefix + 'products/applications/ebusiness/scm/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_1_7=g_navNode_1_2_1.addNode('ocomen_ebsplanning','Value Chain Planning',ssUrlPrefix + 'products/applications/ebusiness/planning/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_1_9=g_navNode_1_2_1.addNode('ocomen_ebslogistics','Value Chain Execution \x28Logistics\x29',ssUrlPrefix + 'products/applications/ebusiness/logistics/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_2=g_navNode_1_2.addNode('ocomen_peoplesoftentp','PeopleSoft Enterprise',ssUrlPrefix + 'products/applications/peoplesoft-enterprise/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_2_0=g_navNode_1_2_2.addNode('ocomen-assetlifecyclemgmt','Asset Lifecycle Management ',ssUrlPrefix + 'products/applications/peoplesoft-enterprise/asset-lifecycle-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_2_1=g_navNode_1_2_2.addNode('ocomen-campussolutions','Campus Solutions',ssUrlPrefix + 'products/applications/peoplesoft-enterprise/campus-solutions/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_2_2=g_navNode_1_2_2.addNode('ocomen-psftcrm','Customer Relationship Management ',ssUrlPrefix + 'products/applications/peoplesoft-enterprise/crm/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_2_3=g_navNode_1_2_2.addNode('ocomen_performancemanagement','Enterprise Performance Management',ssUrlPrefix + 'products/applications/peoplesoft-enterprise/enterprise-performance-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_2_4=g_navNode_1_2_2.addNode('ocomen-serviceautomation','Enterprise Service Automation \x28Project Portfolio Management\x29',ssUrlPrefix + 'products/applications/peoplesoft-enterprise/service-automation/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_2_5=g_navNode_1_2_2.addNode('ocomen-financialmanagement','Financial Management',ssUrlPrefix + 'products/applications/peoplesoft-enterprise/financial-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_2_6=g_navNode_1_2_2.addNode('ocomen-psfthcm','Human Capital Management',ssUrlPrefix + 'products/applications/peoplesoft-enterprise/hcm/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_2_7=g_navNode_1_2_2.addNode('ocomen-psftsrm','Supplier Relationship Management \x28Procurement\x29',ssUrlPrefix + 'products/applications/peoplesoft-enterprise/srm/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_2_8=g_navNode_1_2_2.addNode('ocomen-psftscm','Supply Chain Management',ssUrlPrefix + 'products/applications/peoplesoft-enterprise/scm/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_2_9=g_navNode_1_2_2.addNode('ocomen-psfttoolstech','PeopleSoft Enterprise Tools and Technology',ssUrlPrefix + 'products/applications/peoplesoft-enterprise/tools-tech/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_3=g_navNode_1_2.addNode('ocomen_siebel','Siebel',ssUrlPrefix + 'products/applications/siebel/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_3_0=g_navNode_1_2_3.addNode('ocomen_siebelsales','Sales',ssUrlPrefix + 'products/applications/siebel/sales/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_3_1=g_navNode_1_2_3.addNode('ocomen_siebelquoteordercapture','Quote \x26 Order Capture',ssUrlPrefix + 'products/applications/siebel/customer-order-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_3_2=g_navNode_1_2_3.addNode('ocomen_siebelentmktgsuite','Enterprise Marketing Suite',ssUrlPrefix + 'products/applications/siebel/enterprise-marketing/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_3_3=g_navNode_1_2_3.addNode('ocomen_contactcenterservice','Contact Center and Service',ssUrlPrefix + 'products/applications/siebel/contact-center-service/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_3_4=g_navNode_1_2_3.addNode('ocomen_selfserviceebilling','Self-Service and E-Billing',ssUrlPrefix + 'products/applications/siebel/self-service-ebilling/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_3_5=g_navNode_1_2_3.addNode('ocomen_partnerrelationship','Partner Relationship Management',ssUrlPrefix + 'products/applications/siebel/partner-relationship/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_3_6=g_navNode_1_2_3.addNode('ocomen_crmtechnology',' CRM Technology',ssUrlPrefix + 'products/applications/siebel/crm-technology/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_3_7=g_navNode_1_2_3.addNode('ocomen_crmgadgets','CRM Gadgets',ssUrlPrefix + 'products/applications/siebel/crm-gadgets/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_4=g_navNode_1_2.addNode('ocomen_jdedwardsentone','JD Edwards EnterpriseOne',ssUrlPrefix + 'products/applications/jd-edwards-enterpriseone/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_4_0=g_navNode_1_2_4.addNode('ocomen_jdeentoneassetlifecycle','Asset Lifecycle Management',ssUrlPrefix + 'products/applications/jd-edwards-enterpriseone/asset-lifecycle-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_4_1=g_navNode_1_2_4.addNode('ocomen_jdeentonecrm','Customer Relationship Management',ssUrlPrefix + 'products/applications/jd-edwards-enterpriseone/crm/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_4_2=g_navNode_1_2_4.addNode('ocomen_jdeentonefinancialmgmt','Financial Management',ssUrlPrefix + 'products/applications/jd-edwards-enterpriseone/financial-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_4_3=g_navNode_1_2_4.addNode('ocomen_jdeentonefoodbeverage','Food and Beverage Producers \x28Agriculture\x29',ssUrlPrefix + 'products/applications/jd-edwards-enterpriseone/food-and-beverage/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_4_4=g_navNode_1_2_4.addNode('ocomen_jdeentonehcm','Human Capital Management',ssUrlPrefix + 'products/applications/jd-edwards-enterpriseone/hcm/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_4_5=g_navNode_1_2_4.addNode('ocomen_jdeentonemanufacturing','Manufacturing and Engineering',ssUrlPrefix + 'products/applications/jd-edwards-enterpriseone/solution-manufacturing/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_4_6=g_navNode_1_2_4.addNode('ocomen_jdeentonordermanagement','Order Management',ssUrlPrefix + 'products/applications/jd-edwards-enterpriseone/order-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_4_7=g_navNode_1_2_4.addNode('ocomen_jdeentoneprojectmgmt','Project Management',ssUrlPrefix + 'products/applications/jd-edwards-enterpriseone/project-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_4_8=g_navNode_1_2_4.addNode('ocomen_jdeentonerealestate','Real Estate and Home Construction',ssUrlPrefix + 'products/applications/jd-edwards-enterpriseone/real-estate-home-construction/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_4_9=g_navNode_1_2_4.addNode('ocomen_jdeentonescp','Supply Chain Planning',ssUrlPrefix + 'products/applications/jd-edwards-enterpriseone/scp/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_4_10=g_navNode_1_2_4.addNode('ocomen_jdeentonesolutionlogist','Supply Chain Execution \x28Logistics\x29',ssUrlPrefix + 'products/applications/jd-edwards-enterpriseone/solution-logistics/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_4_11=g_navNode_1_2_4.addNode('ocomen_jdeentonesupplymgmt','Supply Management \x28Procurement\x29',ssUrlPrefix + 'products/applications/jd-edwards-enterpriseone/supply-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_4_12=g_navNode_1_2_4.addNode('ocomen_jdeentonetoolstech','Tools and Technology',ssUrlPrefix + 'products/applications/jd-edwards-enterpriseone/tools-and-technology/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_5=g_navNode_1_2.addNode('ocomen_jdedwardsworld','JD Edwards World',ssUrlPrefix + 'products/applications/jd-edwards-world/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_5_0=g_navNode_1_2_5.addNode('ocomen_jdeworlddistributionmgm','Distribution Management',ssUrlPrefix + 'products/applications/jd-edwards-world/distribution-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_5_1=g_navNode_1_2_5.addNode('ocomen_jdeworldfinancialmgmt','Financial Management',ssUrlPrefix + 'products/applications/jd-edwards-world/financial-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_5_2=g_navNode_1_2_5.addNode('ocomen_jdeworldhomebuilderMgmt','Homebuilder Management',ssUrlPrefix + 'products/applications/jd-edwards-world/homebuilder-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_5_3=g_navNode_1_2_5.addNode('ocomen_jdeworldhcm','Human Capital Management',ssUrlPrefix + 'products/applications/jd-edwards-world/hcm/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_5_4=g_navNode_1_2_5.addNode('ocomen_jdeworldupk','JD Edwards World User Productivity Kits',ssUrlPrefix + 'products/applications/jd-edwards-world/jd-edwards-world-upk/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_5_5=g_navNode_1_2_5.addNode('ocomen_jdeworldmanufacturingmg','Manufacturing Management',ssUrlPrefix + 'products/applications/jd-edwards-world/manufacturing-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_6=g_navNode_1_2.addNode('ocomen_appshyperion','Hyperion',ssUrlPrefix + 'products/applications/hyperion/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/solutions/ent-performance-bi/performance-management/038419.htm');
g_navNode_1_2_7=g_navNode_1_2.addNode('ocomen_primavera','Primavera ',ssUrlPrefix + 'products/applications/primavera/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_8=g_navNode_1_2.addNode('ocomen_agile','Agile',ssUrlPrefix + 'products/applications/agile/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_9=g_navNode_1_2.addNode('ocomen_autovue','AutoVue',ssUrlPrefix + 'products/applications/autoVue/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_9_0=g_navNode_1_2_9.addNode('ocomen_autovueprofessional','AutoVue 2D Professional',ssUrlPrefix + 'products/applications/autoVue/autovue-2dprofessional/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_9_1=g_navNode_1_2_9.addNode('ocomen_autovueproffessionaladv','AutoVue 3D Professional Advanced',ssUrlPrefix + 'products/applications/autoVue/autovue-3d-professional-advanced/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_9_2=g_navNode_1_2_9.addNode('ocomen_autovueedaprofessional','AutoVue EDA Professional',ssUrlPrefix + 'products/applications/autoVue/autovue-eda-professional/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_9_3=g_navNode_1_2_9.addNode('ocomen_autvuemechanicproffes','AutoVue Electro-Mechanical Professional',ssUrlPrefix + 'products/applications/autoVue/autovue-electro-mechanical-professional/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_9_4=g_navNode_1_2_9.addNode('ocomen_autovueoffice','AutoVue Office',ssUrlPrefix + 'products/applications/autoVue/autovue-office/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_9_5=g_navNode_1_2_9.addNode('ocomen_autovuemobile','AutoVue Mobile',ssUrlPrefix + 'products/applications/autoVue/autovue-mobile/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_9_6=g_navNode_1_2_9.addNode('ocomen_autovuelinkintegration','AutoVue Integrations',ssUrlPrefix + 'products/applications/autoVue/autovue-integrations/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_9_7=g_navNode_1_2_9.addNode('ocomen_autovuewebversion','AutoVue Web Visualization',ssUrlPrefix + 'products/applications/autoVue/autovue-web-visualization/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_10=g_navNode_1_2.addNode('ocomen_masterdatamgmt','Master Data Management',ssUrlPrefix + 'products/applications/master-data-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_11=g_navNode_1_2.addNode('ocom_apparch','Application Integration',ssUrlPrefix + 'products/applications/application-integration-architecture/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_12=g_navNode_1_2.addNode('ocomen_appsupk','User Productivity Kit',ssUrlPrefix + 'products/applications/upk/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_13=g_navNode_1_2.addNode('ocomen_appstutor','Tutor',ssUrlPrefix + 'products/applications/tutor/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_2_15=g_navNode_1_2.addNode('ocomen_oracleopenoffice','Oracle Office',ssUrlPrefix + 'products/applications/open-office/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3=g_navNode_1.addNode('ocomen_infrastructure','Server and Storage Systems',ssUrlPrefix + 'products/servers-storage/index.html','secondaryUrlVariableField==MainContent','ssManagerAccount==MKTG_ADMIN/OCOM_ADMIN');
g_navNode_1_3_0=g_navNode_1_3.addNode('ocomen_servers','Sun Servers',ssUrlPrefix + 'products/servers-storage/servers/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_0_0=g_navNode_1_3_0.addNode('ocomen_blades','Blades',ssUrlPrefix + 'products/servers-storage/servers/blades/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_0_1=g_navNode_1_3_0.addNode('ocomen_sparces','SPARC Servers',ssUrlPrefix + 'products/servers-storage/servers/sparc-enterprise/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_0_1_0=g_navNode_1_3_0_1.addNode('ocomen_cmt','T-Series',ssUrlPrefix + 'products/servers-storage/servers/sparc-enterprise/t-series/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_0_1_1=g_navNode_1_3_0_1.addNode('ocomen_mseries','M-Series',ssUrlPrefix + 'products/servers-storage/servers/sparc-enterprise/m-series/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_0_2=g_navNode_1_3_0.addNode('ocomen_x64','x86 Systems',ssUrlPrefix + 'products/servers-storage/servers/x86/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_0_3=g_navNode_1_3_0.addNode('ocomen_netracarrier','Netra Carrier-Grade Systems',ssUrlPrefix + 'products/servers-storage/servers/netra-carrier-grade/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_0_4=g_navNode_1_3_0.addNode('ocomen_rack','Rack Cabinets',ssUrlPrefix + 'products/servers-storage/servers/rack-cabinets/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_0_5=g_navNode_1_3_0.addNode('ocomen_coolingdoorsystems','Cooling Door Systems',ssUrlPrefix + 'products/servers-storage/servers/coolingdoorsystems/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_0_6=g_navNode_1_3_0.addNode('ocomen_previousproducts','Previous Products',ssUrlPrefix + 'products/servers-storage/servers/previous-products/index.html');
g_navNode_1_3_1=g_navNode_1_3.addNode('ocomen_storage','Sun Storage and Tape',ssUrlPrefix + 'products/servers-storage/storage/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_1_0=g_navNode_1_3_1.addNode('ocomen_tape','Tape Storage',ssUrlPrefix + 'products/servers-storage/storage/tape-storage/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_1_1=g_navNode_1_3_1.addNode('ocomen_snetworking','Storage Networking',ssUrlPrefix + 'products/servers-storage/storage/storage-networking/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_1_2=g_navNode_1_3_1.addNode('ocomen_disk','Fibre Channel Storage',ssUrlPrefix + 'products/servers-storage/storage/disk-storage/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_1_3=g_navNode_1_3_1.addNode('ocomen_flashstorage','Flash Storage',ssUrlPrefix + 'products/servers-storage/storage/flash-storage/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_1_4=g_navNode_1_3_1.addNode('ocomen_opens','Unified Storage',ssUrlPrefix + 'products/servers-storage/storage/unified-storage/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_1_5=g_navNode_1_3_1.addNode('ocomen_ssoftware','Storage Software',ssUrlPrefix + 'products/servers-storage/storage/storage-software/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_1_6=g_navNode_1_3_1.addNode('ocomen_storagepreviousproducts','Previous Products',ssUrlPrefix + 'products/servers-storage/storage/previous-products/index.html');
g_navNode_1_3_2=g_navNode_1_3.addNode('ocomen_sunoracledatabase','Exadata Database Machine',ssUrlPrefix + 'products/servers-storage/sun-oracle-database/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/database/database-machine/index.html');
g_navNode_1_3_3=g_navNode_1_3.addNode('1386','Solaris',ssUrlPrefix + 'products/servers-storage/solaris/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_3_0=g_navNode_1_3_3.addNode('ocomen_performancescalability','Performance and Scalability',ssUrlPrefix + 'products/servers-storage/solaris/performance-scalability/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_3_1=g_navNode_1_3_3.addNode('ocomen_reliability','Reliability',ssUrlPrefix + 'products/servers-storage/solaris/reliability/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_3_2=g_navNode_1_3_3.addNode('ocomen_solarissecurity','Security',ssUrlPrefix + 'products/servers-storage/solaris/security/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_3_3=g_navNode_1_3_3.addNode('ocomen_solarisvirtualization','Virtualization',ssUrlPrefix + 'products/servers-storage/solaris/virtualization/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_3_4=g_navNode_1_3_3.addNode('ocomen_keyfeatures','Key Oracle Solaris Features',ssUrlPrefix + 'products/servers-storage/solaris/key-features/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_3_5=g_navNode_1_3_3.addNode('ocomen_movesolaris','Move to Oracle Solaris',ssUrlPrefix + 'products/servers-storage/solaris/move/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_4=g_navNode_1_3.addNode('1387','Linux',ssUrlPrefix + 'products/servers-storage/linux/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/linux/index.htm');
g_navNode_1_3_5=g_navNode_1_3.addNode('1388','Virtualization',ssUrlPrefix + 'products/servers-storage/virtualization/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/virtualization/index.htm');
g_navNode_1_3_6=g_navNode_1_3.addNode('1389','Enterprise Manager Ops Center',ssUrlPrefix + 'products/servers-storage/oracle-enterprise-manager/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/enterprise-manager/opscenter/index.html');
g_navNode_1_3_7=g_navNode_1_3.addNode('1398','Desktops',ssUrlPrefix + 'products/servers-storage/desktop-workstations/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_8=g_navNode_1_3.addNode('ocomen_nettech','Networking',ssUrlPrefix + 'products/servers-storage/networking/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_8_0=g_navNode_1_3_8.addNode('ocomen_ethernet','Ethernet',ssUrlPrefix + 'products/servers-storage/networking/ethernet/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_8_1=g_navNode_1_3_8.addNode('ocomen_infiband','InfiniBand',ssUrlPrefix + 'products/servers-storage/networking/infiniband/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_8_2=g_navNode_1_3_8.addNode('ocomen_fiberchannel','Fibre Channel, SAS and FCoE',ssUrlPrefix + 'products/servers-storage/networking/fibre-channel/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/products/servers-storage/storage/storage-networking/index.html');
g_navNode_1_3_9=g_navNode_1_3.addNode('ocomen_sunpowercalculators','Sun Power Calculators',ssUrlPrefix + 'products/servers-storage/sun-power-calculators/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_10=g_navNode_1_3.addNode('ocomen_upgradeadvantageprogram','Upgrade Advantage Program',ssUrlPrefix + 'products/servers-storage/upgrade-advantage-program/index.html');
g_navNode_1_3_10_0=g_navNode_1_3_10.addNode('ocomen_uapreturns','Returns',ssUrlPrefix + 'products/servers-storage/upgrade-advantage-program/returns/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_10_1=g_navNode_1_3_10.addNode('ocomen_uapoverview','Overview',ssUrlPrefix + 'products/servers-storage/upgrade-advantage-program/overview/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_10_2=g_navNode_1_3_10.addNode('ocomen_uaptradein','Trade-in',ssUrlPrefix + 'products/servers-storage/upgrade-advantage-program/trade-in/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_3_11=g_navNode_1_3.addNode('ocomen_remanufactured','Remanufactured Systems',ssUrlPrefix + 'products/servers-storage/remanufactured-systems/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_4=g_navNode_1.addNode('ocomen_enterprisemanager','Oracle Enterprise Manager',ssUrlPrefix + 'products/enterprise-manager/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/enterprise_manager/index.html');
g_navNode_1_4_0=g_navNode_1_4.addNode('ocomen_appsvrapplicationmgmt','Application Management',ssUrlPrefix + 'products/enterprise-manager/application-management/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/enterprise_manager/applications-management-packs.html');
g_navNode_1_4_1=g_navNode_1_4.addNode('ocomen_appsvrmiddlewareMgmt','Middleware Management',ssUrlPrefix + 'products/enterprise-manager/middleware-management/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/enterprise_manager/fusion-middleware-management-packs.html');
g_navNode_1_4_2=g_navNode_1_4.addNode('ocomen_appsvrdatabasemgmt','Database Management',ssUrlPrefix + 'products/enterprise-manager/database-management/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/database/db_manageability.html');
g_navNode_1_4_3=g_navNode_1_4.addNode('ocomen_opscenter','Hardware Management',ssUrlPrefix + 'products/enterprise-manager/opscenter/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_4_4=g_navNode_1_4.addNode('ocomen_appsvrheterogeneousmgmt','Heterogeneous Management',ssUrlPrefix + 'products/enterprise-manager/heterogeneous-management/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/enterprise_manager/plug-ins.html');
g_navNode_1_4_5=g_navNode_1_4.addNode('ocomen_applicationperformance','Application Performance Management',ssUrlPrefix + 'products/enterprise-manager/application-performance-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_4_6=g_navNode_1_4.addNode('ocomen_lifecyclemanagement','Lifecycle Management',ssUrlPrefix + 'products/enterprise-manager/lifecycle-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_4_7=g_navNode_1_4.addNode('ocomen_configurationchangemgmt','Configuration and Change Management',ssUrlPrefix + 'products/enterprise-manager/config-change-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_4_8=g_navNode_1_4.addNode('ocomen_applicationqualitymgmt','Application Quality Management',ssUrlPrefix + 'products/enterprise-manager/application-quality-management/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_5=g_navNode_1.addNode('ocomen_relatedtech','Related Technologies',ssUrlPrefix + 'products/technology_solutions/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technologies/technology_solutions.html');
g_navNode_1_6=g_navNode_1.addNode('ocomen_midsizecomp','Oracle for Midsize Companies',ssUrlPrefix + 'products/OracleforMidsizeCompanies/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/solutions/midsize/index.htm');
g_navNode_1_7=g_navNode_1.addNode('ocomen_support','Oracle Support',ssUrlPrefix + 'products/support/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/support/index.htm');
g_navNode_1_8=g_navNode_1.addNode('ocomen_ondemand','Oracle On Demand',ssUrlPrefix + 'products/ondemand/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_8_0=g_navNode_1_8.addNode('ocomen-collateral','Collateral',ssUrlPrefix + 'products/ondemand/collateral/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/ondemand/product_information.html');
g_navNode_1_8_1=g_navNode_1_8.addNode('ocomen-cuss-succ','Customer Successes',ssUrlPrefix + 'products/ondemand/customersuccesses/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/customers/services/outsourcing.html');
g_navNode_1_8_2=g_navNode_1_8.addNode('ocomen_partners','Partners',ssUrlPrefix + 'products/ondemand/partners/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/ondemand/partners/index.html');
g_navNode_1_9=g_navNode_1.addNode('ocomen_consulting','Oracle Consulting',ssUrlPrefix + 'products/consulting/index.html','secondaryUrlVariableField==MainContent','ssManagerAccount==OCOM_ADMIN','ssRHSDefaults==018512');
g_navNode_1_9_0=g_navNode_1_9.addNode('ocomen-tech-serv','Technology Services',ssUrlPrefix + 'products/consulting/technology-services/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/consulting/technology/index.html');
g_navNode_1_9_1=g_navNode_1_9.addNode('ocomen_exadatastartup','Oracle Exadata Start-Up Pack ',ssUrlPrefix + 'products/consulting/exadata-start-up-pack/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_9_2=g_navNode_1_9.addNode('ocomen_exalogicstartup','Oracle Exalogic Start-Up Pack ',ssUrlPrefix + 'products/consulting/exalogic-start-up-pack/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_9_3=g_navNode_1_9.addNode('ocomen-app-serv','Application Services',ssUrlPrefix + 'products/consulting/application-services/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/consulting/applications/index.html');
g_navNode_1_9_4=g_navNode_1_9.addNode('ocomen-expert-services','Expert Services',ssUrlPrefix + 'products/consulting/expert-services/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/consulting/expertservices/index.html');
g_navNode_1_9_5=g_navNode_1_9.addNode('ocomen-partner-services','Partner Services ',ssUrlPrefix + 'products/consulting/partner-services/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/consulting/partner-services.html');
g_navNode_1_9_6=g_navNode_1_9.addNode('ocomen-architectureservices','Enterprise Architecture Services',ssUrlPrefix + 'products/consulting/enterprise-architecture-services/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_9_8=g_navNode_1_9.addNode('ocomen-upgrade-services','Upgrade Services ',ssUrlPrefix + 'products/consulting/upgrade-services/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/consulting/upgrade-services.html');
g_navNode_1_9_9=g_navNode_1_9.addNode('ocomen-resource-library1','Services Portfolio',ssUrlPrefix + 'products/consulting/resource-library/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/consulting/library/index.html');
g_navNode_1_10=g_navNode_1.addNode('ocomen_oracleuniversity','Oracle University',ssUrlPrefix + 'products/OracleUniversity/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//education.oracle.com');
g_navNode_1_11=g_navNode_1.addNode('ocomen_financing','Oracle Financing',ssUrlPrefix + 'products/financing/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/financing/index.html');
g_navNode_1_11_0=g_navNode_1_11.addNode('ocomen_financingenterprise',' Large Enterprise Business',ssUrlPrefix + 'products/financing/enterprise/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_11_1=g_navNode_1_11.addNode('ocomen_financingmidsize','Midsize Companies',ssUrlPrefix + 'products/financing/midsize/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_11_2=g_navNode_1_11.addNode('ocome_financingpublicsector','Public Sector Organizations',ssUrlPrefix + 'products/financing/public-sector/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_11_3=g_navNode_1_11.addNode('ocomen_financinglibrary','Resource Library',ssUrlPrefix + 'products/financing/library/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_11_4=g_navNode_1_11.addNode('ocomen_financingpolicies','Financing Policies ',ssUrlPrefix + 'products/financing/policies/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_12=g_navNode_1.addNode('ocomen_tools','Tools',ssUrlPrefix + 'products/tools/index.html','secondaryUrlVariableField==MainContent');
g_navNode_1_13=g_navNode_1.addNode('ocomen_productslist','Products A to Z',ssUrlPrefix + 'products/productslist/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/products/product_list.html');
g_navNode_2=g_navNode_Root.addNode('ocomen_industries','Industries',ssUrlPrefix + 'industries/index.html','secondaryUrlVariableField==MainContent','ssManagerAccount==MKTG_ADMIN/OCOM_ADMIN','ssRedirectURL==http\x3a//www.oracle.com/industries/index.html');
g_navNode_2_0=g_navNode_2.addNode('ocomen_aerospace','Aerospace',ssUrlPrefix + 'industries/aerospace/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_1=g_navNode_2.addNode('ocomen_automative','Automotive',ssUrlPrefix + 'industries/automotive/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_2=g_navNode_2.addNode('ocomen_chemicals','Chemicals',ssUrlPrefix + 'industries/chemicals/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_3=g_navNode_2.addNode('ocomen_communications','Communications',ssUrlPrefix + 'industries/communications/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_4=g_navNode_2.addNode('ocomen_consumer','Consumer Products',ssUrlPrefix + 'industries/consumer/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_5=g_navNode_2.addNode('ocomen_education','Education and Research',ssUrlPrefix + 'industries/education-and-research/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_6=g_navNode_2.addNode('ocomen_engineeringconstruction','Engineering and Construction',ssUrlPrefix + 'industries/engineering-and-construction/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_7=g_navNode_2.addNode('ocomen_financialservices','Financial Services',ssUrlPrefix + 'industries/financial-services/index.html','secondaryUrlVariableField==MainContent','ssManagerAccount==OCOM_ADMIN');
g_navNode_2_7_0=g_navNode_2_7.addNode('ocomen_banking','Banking',ssUrlPrefix + 'industries/financial-services/banking/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_7_1=g_navNode_2_7.addNode('ocomen_capitalmarkets','Capital Markets',ssUrlPrefix + 'industries/financial-services/capital-markets/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_8=g_navNode_2.addNode('ocomen_healthcare','Healthcare',ssUrlPrefix + 'industries/healthcare/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/industries/healthcare/index.html');
g_navNode_2_9=g_navNode_2.addNode('ocomen_hightech','High Technology',ssUrlPrefix + 'industries/high-tech/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_10=g_navNode_2.addNode('ocomen_indmfg','Industrial Manufacturing',ssUrlPrefix + 'industries/industrial-manufacturing/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_11=g_navNode_2.addNode('ocomen_insurance','Insurance',ssUrlPrefix + 'industries/insurance/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_12=g_navNode_2.addNode('ocomen_lifesciences','Life Sciences',ssUrlPrefix + 'industries/life-sciences/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/industries/life_sciences/index.html');
g_navNode_2_13=g_navNode_2.addNode('ocomen_mediaent','Media and Entertainment',ssUrlPrefix + 'industries/media-entertainment/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_14=g_navNode_2.addNode('ocomen_natrsrc','Natural Resources',ssUrlPrefix + 'industries/natural-resources/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_15=g_navNode_2.addNode('ocomen_oilgas','Oil and Gas',ssUrlPrefix + 'industries/oil-and-gas/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_16=g_navNode_2.addNode('ocomen_profserv','Professional Services',ssUrlPrefix + 'industries/professional-services/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_17=g_navNode_2.addNode('ocomen_publicsector','Public Sector',ssUrlPrefix + 'industries/public-sector/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_18=g_navNode_2.addNode('ocomen_retail','Retail',ssUrlPrefix + 'industries/retail/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_19=g_navNode_2.addNode('ocomen_traveltransp','Travel and Transportation',ssUrlPrefix + 'industries/travel-transportation/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_20=g_navNode_2.addNode('ocomen_utilities','Utilities',ssUrlPrefix + 'industries/utilities/index.html','secondaryUrlVariableField==MainContent');
g_navNode_2_21=g_navNode_2.addNode('ocomen_wholesaledistribution','Wholesale Distribution',ssUrlPrefix + 'industries/wholesale/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/industries/wholesale/index.html');
g_navNode_3=g_navNode_Root.addNode('ocomen-support','Support',ssUrlPrefix + 'support/index.html','secondaryUrlVariableField==MainContent','ssManagerAccount==MKTG_ADMIN/OCOM_ADMIN','ssRedirectURL==http\x3a//www.oracle.com/support/index.html');
g_navNode_3_1=g_navNode_3.addNode('ocomen_softwaresupport','Software Support',ssUrlPrefix + 'support/software/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_1_0=g_navNode_3_1.addNode('ocomen_premiersupport','Premier Support for Software',ssUrlPrefix + 'support/software/premier/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/support/premier/index.html');
g_navNode_3_1_1=g_navNode_3_1.addNode('ocomen_advancedcustomerservice','Advanced Customer Services',ssUrlPrefix + 'support/software/advanced-customer-services/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/support/advanced-customer-services/index.html');
g_navNode_3_2=g_navNode_3.addNode('ocomen_systemssupport','Systems Support',ssUrlPrefix + 'support/systems/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_2_0=g_navNode_3_2.addNode('ocomen_premiersupportforsystem','Premier Support for Systems',ssUrlPrefix + 'support/systems/premier/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_2_1=g_navNode_3_2.addNode('ocomen_premiersupportopsystems','Premier Support for Operating Systems',ssUrlPrefix + 'support/systems/operating-systems/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_2_2=g_navNode_3_2.addNode('ocomen_advcustservicesystems','Advanced Customer Services',ssUrlPrefix + 'support/systems/advanced-customer-services/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_3=g_navNode_3.addNode('ocomen_lifetime_support','Lifetime Support',ssUrlPrefix + 'support/lifetime-support/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/support/lifetime-support-policy.html');
g_navNode_3_4=g_navNode_3.addNode('ocomen_support_linux','Unbreakable Linux',ssUrlPrefix + 'support/linux/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/technologies/linux/index.htm');
g_navNode_3_5=g_navNode_3.addNode('ocomen_support_resources','Oracle Support Resources',ssUrlPrefix + 'support/tools-resources/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/support/tools-resources/index.html');
g_navNode_3_6=g_navNode_3.addNode('ocomen_acquired_support','Acquired Product Support',ssUrlPrefix + 'support/support-integration/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/support/support-integration.html');
g_navNode_3_7=g_navNode_3.addNode('ocomen_resource_lib','Resource Library',ssUrlPrefix + 'support/library/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/support/library/index.html');
g_navNode_3_8=g_navNode_3.addNode('ocomen_support_policies','Support Policies',ssUrlPrefix + 'support/policies/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/support/policies.html');
g_navNode_3_9=g_navNode_3.addNode('ocomen_licensecodes','License Codes',ssUrlPrefix + 'support/licensecodes/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_9_0=g_navNode_3_9.addNode('ocomen_lc-agile','Agile',ssUrlPrefix + 'support/licensecodes/agile/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_9_1=g_navNode_3_9.addNode('ocomen_lc-bea','BEA',ssUrlPrefix + 'support/licensecodes/bea/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_9_2=g_navNode_3_9.addNode('ocomen_lc-businessintelligence','Business Intelligence',ssUrlPrefix + 'support/licensecodes/business-intelligence/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_9_3=g_navNode_3_9.addNode('ocomen_lc-cimmetry','Cimmetry',ssUrlPrefix + 'support/licensecodes/cimmetry/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_9_4=g_navNode_3_9.addNode('ocomen_lc-etestsuite','e-TEST Suite',ssUrlPrefix + 'support/licensecodes/e-test-suite/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_9_5=g_navNode_3_9.addNode('ocomen_lc-goldengate','GoldenGate',ssUrlPrefix + 'support/licensecodes/goldengate/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_9_6=g_navNode_3_9.addNode('ocomen_lc-hyperion','Hyperion',ssUrlPrefix + 'support/licensecodes/hyperion/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_9_7=g_navNode_3_9.addNode('ocomen_lc-jdeenterpriseone','JD Edwards EnterpriseOne',ssUrlPrefix + 'support/licensecodes/jd-edwards-enterpriseone/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_9_8=g_navNode_3_9.addNode('ocomen_lc-jdeworld','JD Edwards World',ssUrlPrefix + 'support/licensecodes/jd-edwards-world/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_9_9=g_navNode_3_9.addNode('ocomen_lc-finservices','Oracle Financial Services',ssUrlPrefix + 'support/licensecodes/financial-services/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_9_10=g_navNode_3_9.addNode('ocomen_lc-insurance','Oracle Insurance',ssUrlPrefix + 'support/licensecodes/insurance/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_9_11=g_navNode_3_9.addNode('ocomen_lc-psenterprise','PeopleSoft Enterprise',ssUrlPrefix + 'support/licensecodes/peoplesoft-enterprise/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_9_12=g_navNode_3_9.addNode('ocomen_lc-primavera','Primavera',ssUrlPrefix + 'support/licensecodes/primavera/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_9_13=g_navNode_3_9.addNode('ocomen_lc-relsys','Relsys',ssUrlPrefix + 'support/licensecodes/relsys/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_9_14=g_navNode_3_9.addNode('ocomen_lc-siebelcrm','Siebel',ssUrlPrefix + 'support/licensecodes/siebel/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_9_15=g_navNode_3_9.addNode('ocomen_lc-sun','Sun',ssUrlPrefix + 'support/licensecodes/sun/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_9_16=g_navNode_3_9.addNode('ocomen_lc-sunopsis','Sunopsis',ssUrlPrefix + 'support/licensecodes/sunopsis/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_9_17=g_navNode_3_9.addNode('ocomen_lc-tangosol','Tangosol',ssUrlPrefix + 'support/licensecodes/tangosol/index.html','secondaryUrlVariableField==MainContent');
g_navNode_3_9_18=g_navNode_3_9.addNode('ocomen_lc-thirdpartyproducts','Third Party Products',ssUrlPrefix + 'support/licensecodes/third-party-products/index.html','secondaryUrlVariableField==MainContent');
g_navNode_4=g_navNode_Root.addNode('ocomen_store','Store',ssUrlPrefix + 'store/index.html','ssRedirectURL==https\x3a//shop.oracle.com');
g_navNode_5=g_navNode_Root.addNode('ocomen-partnerships','Partners',ssUrlPrefix + 'partnerships/index.html','secondaryUrlVariableField==MainContent','ssManagerAccount==MKTG_ADMIN/OCOM_ADMIN','ssRedirectURL==http\x3a//www.oracle.com/partners/');
g_navNode_5_0=g_navNode_5.addNode('ocomen-partnerships-isv','Independent Software Vendors',ssUrlPrefix + 'partnerships/isv/index.html','secondaryUrlVariableField==MainContent');
g_navNode_5_1=g_navNode_5.addNode('ocomen-partnerships-hw','Platform Partners',ssUrlPrefix + 'partnerships/hw/index.html','secondaryUrlVariableField==MainContent');
g_navNode_5_2=g_navNode_5.addNode('ocomen-partnerships-si','System Integrators',ssUrlPrefix + 'partnerships/si/index.html','secondaryUrlVariableField==MainContent');
g_navNode_5_3=g_navNode_5.addNode('ocomen-partnerships-resellers','Reseller and Distribution Alliances',ssUrlPrefix + 'partnerships/resellers/index.html','secondaryUrlVariableField==MainContent');
g_navNode_5_4=g_navNode_5.addNode('ocomen-partnerships-solutions','Validated Integrations',ssUrlPrefix + 'partnerships/solutions/index.html','secondaryUrlVariableField==MainContent');
g_navNode_5_5=g_navNode_5.addNode('ocomen-partnerships-customers','Partner Success Stories',ssUrlPrefix + 'partnerships/customers-partners/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/customers/partners/index.html');
g_navNode_5_6=g_navNode_5.addNode('ocomen-partnerships-sc','Solutions Catalog',ssUrlPrefix + 'partnerships/solutions-catalog/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//solutions.oracle.com/');
g_navNode_5_8=g_navNode_5.addNode('ocomen-partnerships-opn','Oracle PartnerNetwork',ssUrlPrefix + 'partnerships/partners/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//oraclepartnernetwork.oracle.com/');
g_navNode_6=g_navNode_Root.addNode('ocomen-communities','Communities',ssUrlPrefix + 'community/index.html','ssManagerAccount==MKTG_ADMIN/OCOM_ADMIN','ssRedirectURL==http\x3a//www.oracle.com/community/index.html');
g_navNode_6_0=g_navNode_6.addNode('ocomen-technology','Oracle Technology Network',ssUrlPrefix + 'community/technology/index.html','ssRedirectURL==http\x3a//www.oracle.com/technology/index.html');
g_navNode_6_1=g_navNode_6.addNode('ocomen-partnernetwork','Oracle PartnerNetwork',ssUrlPrefix + 'community/partnernetwork/index.html','ssRedirectURL==http\x3a//www.oracle.com/partners/index.html');
g_navNode_6_2=g_navNode_6.addNode('ocomen_oraclecfo','Oracle CFO Central',ssUrlPrefix + 'community/Oracle CFO Central/index.html');
g_navNode_6_3=g_navNode_6.addNode('ocomen-forums','Oracle Discussion Forums',ssUrlPrefix + 'community/forums/index.html','ssRedirectURL==http\x3a//forums.oracle.com/');
g_navNode_6_4=g_navNode_6.addNode('ocomen-blogs','Oracle Blogs',ssUrlPrefix + 'community/blogs/index.html','ssRedirectURL==http\x3a//www.oracle.com/blogs/index.html');
g_navNode_6_5=g_navNode_6.addNode('ocomen-ace-program','Oracle Ace Program',ssUrlPrefix + 'community/ace-program/index.html','ssRedirectURL==http\x3a//www.oracle.com/technology/community/oracle_ace/index.html');
g_navNode_6_6=g_navNode_6.addNode('ocomen-wiki','Oracle Wiki',ssUrlPrefix + 'community/wiki/index.html','ssRedirectURL==http\x3a//wiki.oracle.com/');
g_navNode_6_7=g_navNode_6.addNode('ocomen-mix','Oracle Mix',ssUrlPrefix + 'community/mix/index.html','ssRedirectURL==https\x3a//mix.oracle.com/');
g_navNode_6_8=g_navNode_6.addNode('ocomen-usergroups','Oracle User Groups',ssUrlPrefix + 'community/usergroups/index.html','ssRedirectURL==http\x3a//www.oracle.com/technology/community/user_groups/index.html');
g_navNode_7=g_navNode_Root.addNode('ocomen-about','About',ssUrlPrefix + 'corporate/index.html','secondaryUrlVariableField==MainContent','ssManagerAccount==MKTG_ADMIN/OCOM_ADMIN','ssRedirectURL==http\x3a//www.oracle.com/corporate/index.html');
g_navNode_7_0=g_navNode_7.addNode('ocomen_customers','Oracle Customers',ssUrlPrefix + 'corporate/customers/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/customers/index.html');
g_navNode_7_0_0=g_navNode_7_0.addNode('ocomen-customersearch','Customer and Partner Search',ssUrlPrefix + 'corporate/customers/customersearch/index.html');
g_navNode_7_0_2=g_navNode_7_0.addNode('ocomen_globalcust','Global Customer Programs',ssUrlPrefix + 'corporate/customers/global-customer-programs/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/corporate/customers/global-customer-programs/index.html');
g_navNode_7_0_3=g_navNode_7_0.addNode('ocomen_custreferences','Customer References Activities',ssUrlPrefix + 'corporate/customers/customer-references-activites/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_1=g_navNode_7.addNode('ocomen-acquisitions','Acquisitions',ssUrlPrefix + 'corporate/Acquisitions/index.html','secondaryUrlVariableField==MainContent','ssManagerAccount==MKTG_ADMIN/OCOM_ADMIN');
g_navNode_7_2=g_navNode_7.addNode('ocomen-contact','Contact Oracle',ssUrlPrefix + 'corporate/contact/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_3=g_navNode_7.addNode('ocomen-history','History',ssUrlPrefix + 'corporate/history/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/corporate/story.html');
g_navNode_7_4=g_navNode_7.addNode('ocomen-investor','Investor Relations',ssUrlPrefix + 'corporate/investor-relations/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/corporate/investor_relations/index.html');
g_navNode_7_4_0=g_navNode_7_4.addNode('ocoemen_earningsreleases','Earnings Releases',ssUrlPrefix + 'corporate/investor-relations/financials/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_4_1=g_navNode_7_4.addNode('ocomen_detailedfinancials','Detailed Financials',ssUrlPrefix + 'corporate/investor-relations/detailed-financials/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_4_2=g_navNode_7_4.addNode('ocomen_secfilings','SEC Filings',ssUrlPrefix + 'corporate/investor-relations/sec/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_4_3=g_navNode_7_4.addNode('ocomen_dividendsandstocksplits','Dividends and Stock Splits',ssUrlPrefix + 'corporate/investor-relations/stock/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_4_4=g_navNode_7_4.addNode('ocomen_proxyelectronicdelivery','Proxy and Electronic Delivery Enrollment',ssUrlPrefix + 'corporate/investor-relations/proxy/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_4_5=g_navNode_7_4.addNode('ocomen_investorreleationsfaq','Frequently Asked Questions \x28FAQ\x29',ssUrlPrefix + 'corporate/investor-relations/faq/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_4_6=g_navNode_7_4.addNode('ocomen_calendarofevents','Calendar of Events',ssUrlPrefix + 'corporate/investor-relations/calendar/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_4_7=g_navNode_7_4.addNode('ocomen_analystcoverage','Analyst Coverage',ssUrlPrefix + 'corporate/investor-relations/analyst-coverage/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_4_8=g_navNode_7_4.addNode('ocomen_contactinvestor','Contact Investor Relations',ssUrlPrefix + 'corporate/investor-relations/contact/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_5=g_navNode_7.addNode('ocomen-citizenship','Oracle Corporate Citizenship',ssUrlPrefix + 'corporate/citizenship/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/corporate/community/index.html');
g_navNode_7_5_0=g_navNode_7_5.addNode('ocomen_oracleinthecommunity','Oracle in the Community',ssUrlPrefix + 'corporate/citizenship/community/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_5_1=g_navNode_7_5.addNode('ocomen_oraclesglobalworkforce','Oracle\'s Global Workforce',ssUrlPrefix + 'corporate/citizenship/workforce/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_5_2=g_navNode_7_5.addNode('ocomen_oracleandprivacy','Oracle and Privacy',ssUrlPrefix + 'corporate/citizenship/privacy/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_5_3=g_navNode_7_5.addNode('ocomen_oracleandtheenvironment','Oracle and the Environment',ssUrlPrefix + 'corporate/citizenship/environment/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_5_4=g_navNode_7_5.addNode('ocomen_oracleenergymanagement','Oracle and Energy Management',ssUrlPrefix + 'corporate/citizenship/energy/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_5_5=g_navNode_7_5.addNode('ocomen_corpcitizenshipaward','Corporate Citizenship Awards',ssUrlPrefix + 'corporate/citizenship/awards/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6=g_navNode_7_5.addNode('ocomen-ccr','Oracle Corporate Citizenship Report',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent','ssTabsLevelOverride==-1');
g_navNode_7_5_6_0=g_navNode_7_5_6.addNode('ocomen-ccr-intro','Introduction',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/introduction/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent','ssTabsLevelOverride==0');
g_navNode_7_5_6_0_0=g_navNode_7_5_6_0.addNode('ocomen-ccr-intro-overview','Overview',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/introduction/overview/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_0_0_0=g_navNode_7_5_6_0_0.addNode('ocomen-ccr-intro-over-keydata','Key Data',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/introduction/overview/key-data/index.html','contributorOnly==FALSE');
g_navNode_7_5_6_0_0_1=g_navNode_7_5_6_0_0.addNode('ocomen-ccr-intro-over-awards','Awards and Recognition',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/introduction/overview/awards-recognition/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_0_1=g_navNode_7_5_6_0.addNode('ocomen-ccr-citizenship','Citizenship',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/introduction/citizenship/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_0_2=g_navNode_7_5_6_0.addNode('ocomen-ccr-governance','Governance',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/introduction/governance/index.html','contributorOnly==FALSE');
g_navNode_7_5_6_0_3=g_navNode_7_5_6_0.addNode('ocomen-ccr-compliance','Compliance \x26 Ethics',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/introduction/compliance-ethics/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_0_3_0=g_navNode_7_5_6_0_3.addNode('ocomen-ccr-compl-intro','Introduction',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/introduction/compliance-ethics/introduction/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_0_3_1=g_navNode_7_5_6_0_3.addNode('ocomen-ccr-compl-comm','Communication',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/introduction/compliance-ethics/communication/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_0_3_2=g_navNode_7_5_6_0_3.addNode('ocomen-ccr-compl-train','Training',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/introduction/compliance-ethics/training/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_0_3_3=g_navNode_7_5_6_0_3.addNode('ocomen-ccr-compl-resources','Resources',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/introduction/compliance-ethics/resources/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_0_3_4=g_navNode_7_5_6_0_3.addNode('ocomen-ccr-compl-enforcement','Enforcement \x26 Reporting',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/introduction/compliance-ethics/enforcement-reporting/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_0_4=g_navNode_7_5_6_0.addNode('ocomen-ccr-policy','Policy',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/introduction/policy/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_0_5=g_navNode_7_5_6_0.addNode('ocomen-ccr-sunoracle','Sun \x26 Oracle',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/introduction/sun-joins-oracle/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_1=g_navNode_7_5_6.addNode('ocomen-ccr-envir','Environment',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/environment/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent','ssTabsLevelOverride==0');
g_navNode_7_5_6_1_0=g_navNode_7_5_6_1.addNode('ocomen-ccr-envir-over','Overview',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/environment/overview/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent','ssTabsLevelOverride==0');
g_navNode_7_5_6_1_1=g_navNode_7_5_6_1.addNode('ocomen-ccr-envir-facil','Facilities',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/environment/facilities/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_1_1_0=g_navNode_7_5_6_1_1.addNode('1931','Overview',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/environment/facilities/overview/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_1_1_1=g_navNode_7_5_6_1_1.addNode('1932','Energy',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/environment/facilities/energy/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_1_1_2=g_navNode_7_5_6_1_1.addNode('1933','Water',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/environment/facilities/water/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_1_1_3=g_navNode_7_5_6_1_1.addNode('1934','Waste Management',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/environment/facilities/waste-management/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_1_2=g_navNode_7_5_6_1.addNode('ocomen-ccr-envir-tavel','Travel',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/environment/travel/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent','ssTabsLevelOverride==0');
g_navNode_7_5_6_1_3=g_navNode_7_5_6_1.addNode('ocomen-ccr-envir-proc','Procurement',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/environment/procurement/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_1_4=g_navNode_7_5_6_1.addNode('ocomen-ccr-envir-events','Events',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/environment/events/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_1_5=g_navNode_7_5_6_1.addNode('1939','Products',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/environment/products/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_1_5_0=g_navNode_7_5_6_1_5.addNode('1941','Overview',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/environment/products/overview/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_1_5_1=g_navNode_7_5_6_1_5.addNode('1943','Customer Testimonials',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/environment/products/customer-testimonials/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_2=g_navNode_7_5_6.addNode('ocomen-ccr-ed','Oracle and Education',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/oracle-education/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent','ssTabsLevelOverride==0');
g_navNode_7_5_6_2_0=g_navNode_7_5_6_2.addNode('ocomen-ccr-ed-over','Overview',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/oracle-education/overview/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_2_1=g_navNode_7_5_6_2.addNode('ocomen-ccr-ed-acad','Oracle Academy',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/oracle-education/oracle-academy/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_2_2=g_navNode_7_5_6_2.addNode('ocomen-ccr-ed-found','Oracle Education Foundation',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/oracle-education/education-foundation/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_2_2_0=g_navNode_7_5_6_2_2.addNode('ocomen-ccr-ed-found-over','Overview',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/oracle-education/education-foundation/overview/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_2_2_1=g_navNode_7_5_6_2_2.addNode('ocomen-ccr-ed-found-think','ThinkQuest',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/oracle-education/education-foundation/thinkquest/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_2_2_2=g_navNode_7_5_6_2_2.addNode('ocomen-ccr-ed-found-gov','Corporate Goverance',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/oracle-education/education-foundation/corporate-governance/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_3=g_navNode_7_5_6.addNode('ocomen-ccr-give','Giving and Volunteers',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/giving-volunteers/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent','ssTabsLevelOverride==0');
g_navNode_7_5_6_3_0=g_navNode_7_5_6_3.addNode('ocomen-ccr-give-over','Overview',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/giving-volunteers/overview/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_3_1=g_navNode_7_5_6_3.addNode('ocomen-ccr-give-char','Charitable Giving',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/giving-volunteers/charitable-giving/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_3_2=g_navNode_7_5_6_3.addNode('ocomen-ccr-give-volun','Employee Volunteering',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/giving-volunteers/employee-volunteering/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_4=g_navNode_7_5_6.addNode('ocomen-ccr-open','Open Computing',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/open-computing/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent','ssTabsLevelOverride==0');
g_navNode_7_5_6_4_0=g_navNode_7_5_6_4.addNode('ocomen-ccr-open-over','Overview',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/open-computing/overview/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_4_1=g_navNode_7_5_6_4.addNode('ocomen-ccr-open-source','Open Source',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/open-computing/open-source/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_4_2=g_navNode_7_5_6_4.addNode('ocomen-ccr-open-privacy','Privacy',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/open-computing/privacy/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_4_3=g_navNode_7_5_6_4.addNode('ocomen-ccr-open-access','Accessibility',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/open-computing/accessibility/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_5=g_navNode_7_5_6.addNode('1960','Global Workforce',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/global-workforce/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent','ssTabsLevelOverride==0');
g_navNode_7_5_6_5_0=g_navNode_7_5_6_5.addNode('ocomen-ccr-global-over','Overview',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/global-workforce/overview/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_5_1=g_navNode_7_5_6_5.addNode('ocomen-ccr-global-diverisity','Diversity and Inclusion',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/global-workforce/diversity-inclusion/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_5_2=g_navNode_7_5_6_5.addNode('ocomen-ccr-global-empdev','Employee Development',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/global-workforce/employee-development/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_5_2_0=g_navNode_7_5_6_5_2.addNode('ocomen-ccr-global-empdev-org','Organization and Talent Development',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/global-workforce/employee-development/organization-talent-development/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_5_2_1=g_navNode_7_5_6_5_2.addNode('ocomen-ccr-global-empdev-uni','Oracle University',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/global-workforce/employee-development/oracle-university/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_5_3=g_navNode_7_5_6_5.addNode('ocomen-ccr-global-well','Wellness',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/global-workforce/wellness/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_5_3_0=g_navNode_7_5_6_5_3.addNode('ocomen-ccr-global-well-emp','Employee Health and Safety',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/global-workforce/wellness/employee-health/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_5_6_5_3_1=g_navNode_7_5_6_5_3.addNode('ocomen-ccr-global-well-prev','Preventative Health Programs',ssUrlPrefix + 'corporate/citizenship/corporate-citizenship-report/global-workforce/wellness/preventative-health/index.html','contributorOnly==FALSE','secondaryUrlVariableField==MainContent');
g_navNode_7_6=g_navNode_7.addNode('ocomen-insight','Oracle Insight  ',ssUrlPrefix + 'corporate/insight/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_6_0=g_navNode_7_6.addNode('ocomen_howinsightworks','How Insight Works',ssUrlPrefix + 'corporate/insight/how/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/services/insight/how.html');
g_navNode_7_6_1=g_navNode_7_6.addNode('ocomen_whyoracleinsight','Why Oracle Insight',ssUrlPrefix + 'corporate/insight/why/index.html','ssRedirectURL==http\x3a//www.oracle.com/services/insight/why.html');
g_navNode_7_6_2=g_navNode_7_6.addNode('ocomen_team','The Team',ssUrlPrefix + 'corporate/insight/team/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/services/insight/team.html');
g_navNode_7_6_3=g_navNode_7_6.addNode('ocomen_insightlibrary','Resource Library',ssUrlPrefix + 'corporate/insight/library/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/services/insight/in-print.html');
g_navNode_7_7=g_navNode_7.addNode('ocomen-welcome','Welcome to Oracle',ssUrlPrefix + 'corporate/welcome/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/welcome/index.html');
g_navNode_7_8=g_navNode_7.addNode('ocomen-events','Events',ssUrlPrefix + 'corporate/events/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//events.oracle.com');
g_navNode_7_9=g_navNode_7.addNode('ocomen-pressroom','Press Room',ssUrlPrefix + 'corporate/press/index.html','DirectDeliveryExtensions==jpeg,jpg,txt,mpg,gzip,zip,png,sh,rpm,bin,wma,mp3,pps,wmv,tiff,ppt,jar,exe,avi,swf,xls,wav,pdf,gz,rtf,rar,so,gif,tar,mov','OverrideDirectDeliveryExtensions==TRUE','secondaryUrlVariableField==region2','xmlQueryText==xWebsiteSection \x3csubstring\x3e \x60ocomen\x3aocomen-pressroom\x60 \x3cAND\x3e xWebsiteObjectType \x3csubstring\x3e \x60\"Native Document\"\x60');
g_navNode_7_9_0=g_navNode_7_9.addNode('ocomen-pressrelease','Press Release',ssUrlPrefix + 'corporate/press/pressrelease/index.html','secondaryUrlVariableField==region2','ssRedirectURL==http\x3a//pressroom.oracle.com/\x3atarget\x3d_blank\x3a');
g_navNode_7_9_2=g_navNode_7_9.addNode('ocomen-boardofdirectors','Board of Directors',ssUrlPrefix + 'corporate/press/BoardofDirectors/index.html','secondaryUrlVariableField==region2');
g_navNode_7_9_3=g_navNode_7_9.addNode('ocomen-executives','Executives',ssUrlPrefix + 'corporate/press/Executives/index.html','secondaryUrlVariableField==region2');
g_navNode_7_9_4=g_navNode_7_9.addNode('ocomen-spokespeople','Spokespeople',ssUrlPrefix + 'corporate/press/Spokespeople/index.html','secondaryUrlVariableField==region2');
g_navNode_7_9_5=g_navNode_7_9.addNode('ocomen-mediakits','Media Kits',ssUrlPrefix + 'corporate/press/mediakits/index.html','secondaryUrlVariableField==region2');
g_navNode_7_9_8=g_navNode_7_9.addNode('ocomen-pubrelationscontact','Public Relations Contacts',ssUrlPrefix + 'corporate/press/publicrelationscontacts/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_9_9=g_navNode_7_9.addNode('226','EMEA Media Center',ssUrlPrefix + 'corporate/press/emeamediacenter/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//emeapressoffice.oracle.com/\x3atarget\x3d_blank\x3a');
g_navNode_7_9_10=g_navNode_7_9.addNode('225','APAC Media Center',ssUrlPrefix + 'corporate/press/apacmediacenter/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//apacmediacentre.oracle.com/\x3atarget\x3d_blank\x3a');
g_navNode_7_9_11=g_navNode_7_9.addNode('246','Japan Media Center',ssUrlPrefix + 'corporate/press/JapanMediaCenter/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//japanmediacentre.oracle.com/\x3atarget\x3d_blank\x3a');
g_navNode_7_10=g_navNode_7.addNode('ocomen-magazines','Oracle and Profit Magazines  ',ssUrlPrefix + 'corporate/magazines/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technetwork/oramag/index.html');
g_navNode_7_11=g_navNode_7.addNode('ocomen-newsletters','Oracle Newsletters ',ssUrlPrefix + 'corporate/newsletters/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/newsletters/index.html');
g_navNode_7_12=g_navNode_7.addNode('ocomen-timeline','Oracle Timeline ',ssUrlPrefix + 'corporate/timeline/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/timeline/index.html');
g_navNode_7_13=g_navNode_7.addNode('ocomen-accessibility','Accessibility',ssUrlPrefix + 'corporate/accessibility/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/accessibility/index.html');
g_navNode_7_13_1=g_navNode_7_13.addNode('ocomen_accessibilitypolicies','Policies',ssUrlPrefix + 'corporate/accessibility/policies/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_13_2=g_navNode_7_13.addNode('ocomen_accessibilityproducts','Products',ssUrlPrefix + 'corporate/accessibility/products/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_13_3=g_navNode_7_13.addNode('ocomen_vpats','VPATs',ssUrlPrefix + 'corporate/accessibility/vpats/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_13_5=g_navNode_7_13.addNode('ocomen_accessoracleuniversity','Oracle University',ssUrlPrefix + 'corporate/accessibility/oracle-university/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_13_6=g_navNode_7_13.addNode('ocomen_accessibilitysupport','Support',ssUrlPrefix + 'corporate/accessibility/support/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_13_7=g_navNode_7_13.addNode('ocomen_accessibilityresources','Resources',ssUrlPrefix + 'corporate/accessibility/resources/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_13_8=g_navNode_7_13.addNode('ocomen_accessibilityfaqs','FAQs',ssUrlPrefix + 'corporate/accessibility/faqs/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_14=g_navNode_7.addNode('ocomen-advertising','Advertising ',ssUrlPrefix + 'corporate/advertising/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/ad/index.html');
g_navNode_7_15=g_navNode_7.addNode('ocomen-careers','Careers ',ssUrlPrefix + 'corporate/careers/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/corporate/employment/index.html');
g_navNode_7_15_0=g_navNode_7_15.addNode('ocomen_careeropportunities','Career Opportunities',ssUrlPrefix + 'corporate/careers/career-opportunities/index.html','ssRedirectURL==http\x3a//irecruitment.oracle.com');
g_navNode_7_15_1=g_navNode_7_15.addNode('ocomen_collegerecruiting','College Recruiting',ssUrlPrefix + 'corporate/careers/college/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_15_1_0=g_navNode_7_15_1.addNode('ocomen_workatoracle','Work at Oracle',ssUrlPrefix + 'corporate/careers/college/work-at-oracle/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_15_1_1=g_navNode_7_15_1.addNode('ocomen_internships','Product Development Internships ',ssUrlPrefix + 'corporate/careers/college/internships/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_15_1_2=g_navNode_7_15_1.addNode('ocomen_traininganddevelopment','Training and Development',ssUrlPrefix + 'corporate/careers/college/training/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_15_1_3=g_navNode_7_15_1.addNode('ocomen_wheretheyaretoday','Where They Are Today',ssUrlPrefix + 'corporate/careers/college/where-they-are/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_15_1_4=g_navNode_7_15_1.addNode('ocomen_benefits','Benefits',ssUrlPrefix + 'corporate/careers/college/benefits/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_15_1_5=g_navNode_7_15_1.addNode('ocomen_campustour','Campus Tour',ssUrlPrefix + 'corporate/careers/college/tour/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_15_1_6=g_navNode_7_15_1.addNode('ocomen_thebayarea','The Bay Area',ssUrlPrefix + 'corporate/careers/college/bay-area/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_15_1_7=g_navNode_7_15_1.addNode('ocomen_faq','Frequently Asked Questions',ssUrlPrefix + 'corporate/careers/college/faq/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_16=g_navNode_7.addNode('ocomen-cvc','Customer Visit Center ',ssUrlPrefix + 'corporate/cvc/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/corporate/events/cvc/index.html');
g_navNode_7_17=g_navNode_7.addNode('ocomen-LMS','License Management Services ',ssUrlPrefix + 'corporate/license-management-services/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/corporate/lms/index.html');
g_navNode_7_17_0=g_navNode_7_17.addNode('ocomen_lmsoverview','Overview',ssUrlPrefix + 'corporate/license-management-services/overview/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_17_1=g_navNode_7_17.addNode('ocomen_lmstips','Tips',ssUrlPrefix + 'corporate/license-management-services/tips/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_17_2=g_navNode_7_17.addNode('ocomen_lmsfaq','FAQ',ssUrlPrefix + 'corporate/license-management-services/faq/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_17_3=g_navNode_7_17.addNode('ocomen_lmspolicy','Policy',ssUrlPrefix + 'corporate/license-management-services/policy/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_18=g_navNode_7.addNode('ocomen-pricing','Pricing and Licensing',ssUrlPrefix + 'corporate/pricing/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/corporate/pricing/index.html');
g_navNode_7_18_0=g_navNode_7_18.addNode('ocomen_softwareinvestmentguide','Software Investment Guide',ssUrlPrefix + 'corporate/pricing/software-investment-guide/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_18_1=g_navNode_7_18.addNode('ocomen_specialtytopics','Specialty Topics',ssUrlPrefix + 'corporate/pricing/specialty-topics/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_18_2=g_navNode_7_18.addNode('ocomen_pricelists','Price Lists',ssUrlPrefix + 'corporate/pricing/price-lists/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_18_3=g_navNode_7_18.addNode('ocomen_taxcertificate','Tax Certificate',ssUrlPrefix + 'corporate/pricing/tax-certificate/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_19=g_navNode_7.addNode('ocomen_suppliers','Oracle Suppliers',ssUrlPrefix + 'corporate/supplier/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_20=g_navNode_7.addNode('ocomen-europeanunion','Oracle and European Union',ssUrlPrefix + 'corporate/european-union/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/corporate/europeanunion/index.html');
g_navNode_7_21=g_navNode_7.addNode('ocomen-oue','Oracle User Experience  ',ssUrlPrefix + 'corporate/user-experience/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//ui.oracle.com/');
g_navNode_7_22=g_navNode_7.addNode('ocom-analystrelations','Analyst Relations',ssUrlPrefix + 'corporate/analystrelations/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_23=g_navNode_7.addNode('ocomen-analystreports','Analyst Reports',ssUrlPrefix + 'corporate/analystreports/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_23_0=g_navNode_7_23.addNode('ocomen-arcorporate','Corporate',ssUrlPrefix + 'corporate/analystreports/corporate/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_23_1=g_navNode_7_23.addNode('ocomen-arenterpriseapplication','Enterprise Application',ssUrlPrefix + 'corporate/analystreports/enterprise-application/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_23_2=g_navNode_7_23.addNode('ocomen-arindustries','Industries',ssUrlPrefix + 'corporate/analystreports/industries/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_23_3=g_navNode_7_23.addNode('ocomen-arinfrastructure','Infrastructure',ssUrlPrefix + 'corporate/analystreports/infrastructure/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_23_4=g_navNode_7_23.addNode('ocomen-arregions','Regions',ssUrlPrefix + 'corporate/analystreports/regions/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_23_5=g_navNode_7_23.addNode('ocomen-arservices','Services',ssUrlPrefix + 'corporate/analystreports/services/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_30=g_navNode_7.addNode('ocomen_publishing','Oracle Publishing',ssUrlPrefix + 'corporate/publishing/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_30_0=g_navNode_7_30.addNode('ocomen_salescontacts','Sales Contacts',ssUrlPrefix + 'corporate/publishing/sales-contacts/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_30_1=g_navNode_7_30.addNode('ocomen_editorialcalendar','Editorial Calendar and Advertising Deadlines',ssUrlPrefix + 'corporate/publishing/editorial-calendar/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_30_2=g_navNode_7_30.addNode('ocomen_specifications','Specifications',ssUrlPrefix + 'corporate/publishing/specifications/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_30_3=g_navNode_7_30.addNode('ocomen_publishingmediakit','Request for a Media Kit',ssUrlPrefix + 'corporate/publishing/media-kit/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_30_4=g_navNode_7_30.addNode('ocomen_publishintermscondition','General Terms and Conditions',ssUrlPrefix + 'corporate/publishing/terms-conditions/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_30_5=g_navNode_7_30.addNode('ocomen_publishingmagazine','Oracle Magazine',ssUrlPrefix + 'corporate/publishing/oramag/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/technetwork/oramag/index.html');
g_navNode_7_30_6=g_navNode_7_30.addNode('ocomen_publishinprofitmagazine','Profit Magazine',ssUrlPrefix + 'corporate/publishing/profit/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==/us/corporate/profit/index.html');
g_navNode_7_30_7=g_navNode_7_30.addNode('ocomen_psublishingsubscribe','Subscribe',ssUrlPrefix + 'corporate/publishing/subscribe/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_30_8=g_navNode_7_30.addNode('ocomen_editorialcontacts','Write the Editors',ssUrlPrefix + 'corporate/publishing/editorial-contacts/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_32=g_navNode_7.addNode('ocomen_profit','Profit Magazine',ssUrlPrefix + 'corporate/profit/index.html','secondaryUrlVariableField==MainContent');
g_navNode_7_32_0=g_navNode_7_32.addNode('ocomen_profitfeatures','Features',ssUrlPrefix + 'corporate/profit/features/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/profit/features/index.html');
g_navNode_7_32_1=g_navNode_7_32.addNode('ocomen_profitopinion','Opinion',ssUrlPrefix + 'corporate/profit/opinion/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/profit/opinion/index.html');
g_navNode_7_32_2=g_navNode_7_32.addNode('ocomen_profitmultimedia','Multimedia',ssUrlPrefix + 'corporate/profit/multimedia/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/profit/exec/index.html');
g_navNode_7_32_3=g_navNode_7_32.addNode('ocomen_profitpartnernews','Partner News',ssUrlPrefix + 'corporate/profit/partners/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/profit/partner/index.html');
g_navNode_7_32_4=g_navNode_7_32.addNode('ocomen_profitoraclemagazine','Oracle Magazine Archives',ssUrlPrefix + 'corporate/profit/oramag/index.html','ssRedirectURL==http\x3a//www.oracle.com/technetwork/oramag/magazine/archive/index.html');
g_navNode_7_32_5=g_navNode_7_32.addNode('ocomen_profitmagzine2','Profit Magazine Archives',ssUrlPrefix + 'corporate/profit/archives/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/profit/index.html');
g_navNode_7_32_6=g_navNode_7_32.addNode('ocomen_profitsubscribe','Subscribe',ssUrlPrefix + 'corporate/profit/subscribe/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/oramag/misc/s_and_a.html');
g_navNode_7_32_7=g_navNode_7_32.addNode('ocomen_profiteditorial','Write the Editors',ssUrlPrefix + 'corporate/profit/editorial-contacts/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/oramag/misc/contactus.html');
g_navNode_7_32_8=g_navNode_7_32.addNode('ocomen_profitaritcle','Submit an Article',ssUrlPrefix + 'corporate/profit/article/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/oramag/misc/submit.html');
g_navNode_7_32_9=g_navNode_7_32.addNode('ocomen_profitadvertise','Advertise',ssUrlPrefix + 'corporate/profit/advertise/index.html','secondaryUrlVariableField==MainContent','ssRedirectURL==http\x3a//www.oracle.com/oramag/advertise/index.html');
