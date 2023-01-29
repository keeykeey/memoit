<head>
    <link rel="stylesheet" href="../src/style.css"/>
</head>


<h1>Service comparison</h1><hr/>
<h2><pre>Virtual Machine</pre></h2><hr/>
    These are Azure's main services.
    <p>
        <table>
            <thead>
                <tr>
                    <th>Abbreviations</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Similer service on aws</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>-</td>
                    <td>Azure Virtual Machines</td>
                    <td>
                        AWS and Azure on-demand VMs bill per seconds used.
                        Although AWS instance types and Azure VM sizes have similar categories, the exact RAM,
                        CPU, and storage capabilities differ.
                    </td>
                    <td>Amazon EC2</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>Azure VMware Solutuin</td>
                    <td>
                        AWS and Azure solutions let you move VMware vSphere-based workloads and environments to the cloud. Azure VMware Solution is a VMware-vertified Microsoft service that runs on Azure infrastructure. You can manage existing environments with VMware solution tools, while
                        modernizing applications with cloud native services.
                    </td>
                    <td>VMware Cloud on AWS</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>Azure CycleCloud</td>
                    <td>Create, manage, operate, and optimize HPC and large compute clusters of any scale.</td>
                    <td>AWS Parallel Cluster</td>
                </tr>
            </tbody>
        </table>
    </p>



<h2><pre>Container</h2></pre><hr/>
    These are Azure's main services.
    <p>
        <table>
            <thead>
                <tr>
                    <th>Abbreviations</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Similer service on aws</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ACA</td>
                    <td>Azure Container Apps</td>
                    <td>enable you to deploy containers scalably</td>
                    <td>ECS</td>
                </tr>
                <tr>
                    <td>ACS</td>
                    <td>Azure Container Registory</td>
                    <td>store Docker images and create container deployments on the cloud</td>
                    <td>ECR</td>
                </tr>
                <tr>
                    <td>AKS</td>
                    <td>Azure Kubernetes Service</td>
                    <td>orchestrate Docker containerized application deployments with Kubernetes</td>
                    <td>EKS</td>
                </tr>
            </tbody>
        </table>
    </p>



<h2><pre>Database</h2></pre><hr/>
    These are Azure's main service
    <p>
        <table>
            <thead>
                <tr>
                    <th>Abbreviations</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Similer service on aws</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="text-align:center" rowspan="4">-</td>
                    <td>SQL Database</td>
                    <td rowspan="4">Relational Database</td>
                    <td rowspan="4">
                        resiliency, scale and maintenance are primarily handled by the Azure platform
                    </td>
                    <td rowspan="4">RDS</td>
                </tr>
                <tr>
                    <td>Databse for MySQL</td>
                </tr>
                <tr>
                    <td>Database for PostgreSQL</td>
                </tr>
                <tr>
                    <td>Database for MariaDB</td>
                </tr>
                <tr>
                    <td style="text-align:center" rowspan="2">-</td>
                    <td>Azure SQL Database services</td>
                    <td rowspan="2">Serverless Relational Database</td>
                    <td rowspan="2">
                        Database that automatically scales based on the workload demand.
                        You're billed per second for the actual compute used data that is processed by your queries.
                    </td>
                    <td rowspan="2">Amazon Aurora Services</td>
                </tr>
                <tr>
                    <td>Serverless SQL pool in Azure Synapse Analystics</td>
                </tr>
                <tr>
                    <td style="text-align:center" rowspan="4">-</td>
                    <td rowspan="4">Azure Custom Database</td>
                    <td rowspan="4">No SQL</td>
                    <td rowspan="4">
                        globally distributed,multi-model database that naitively supprts multi-model database 
                        that natively supprts multiple data models including key-value pairs, documents, and columnar.
                    </td>
                    <td>DynamoDB</td>
                </tr>
                <tr>
                    <td>SimpleDB</td>
                </tr>
                <tr>
                    <td>Amazon DocumentDB</td>
                </tr>
                <tr>
                    <td>Amazon Neptune</td>
                </tr>
                <tr>
                    <td style="text-align:center" rowspan="2">-</td>
                    <td rowspan="2">Cache for Redis</td>
                    <td rowspan="2">Caching</td>
                    <td rowspan="2">
                        An in-memory-based, distributed caching service that provides a high-performance store 
                        that's typically used to offload nontransactional work from a database.
                    </td>
                    <td>Elastic Cache</td>
                </tr>
                <tr>
                    <td>Amazon MemoryDB for Redis</td>
                </tr>
                <tr>
                    <td style="text-align:center">-</td>
                    <td>Database Migration</td>
                    <td>Database migration</td>
                    <td>
                        A service that executes the migration of database schema and 
                        data from one database format to a specific database technology in the cloud.
                    </td>
                    <td>Database Migration</td>
                </tr>
            </tbody>
        </table>
    </p>

<h2><pre>Storage</h2></pre><hr/>
    These are Azure's main services.
    <p>
        <table>
            <thead>
                <tr>
                    <th>Abbreviations</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Similer service on aws</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>-</td><!--abb-->
                    <td>Data disks in Azure Blob Storage</td><!--namr-->
                    <td>
                        Data disks in blob storage provide durable data storage for Azure VMs.
                        This storage is similar to AWS EC2 instance disk volumes on EBS.
                    </td><!--des-->
                    <td>Disk volumes on Amazon Elastic Block Store(EBS)</td><!--aws-->
                </tr>
                <tr>
                    <td>-</td><!--abb-->
                    <td>Azure temporary storage</td><!--namr-->
                    <td>
                        Azure temporary storage provides VMs with similar low-latency temporary read-write storage
                        to EC2 instance storage, also called ephemeral storage.
                    </td><!--des-->
                    <td>Amazon EC2 instance store</td><!--aws-->
                </tr>
                <tr>
                    <td>-</td><!--abb-->
                    <td>Azure premium storage</td><!--namr-->
                    <td>
                        Azure supports higher performance disk I/O with premium storage.
                        This storage is similar to AWS Provisioned IOPS storage options.
                    </td><!--des-->
                    <td>Amazon EBS Provisioned IOPS Volume</td><!--aws-->
                </tr>
                <tr>
                    <td>-</td><!--abb-->
                    <td>Azure Files</td><!--namr-->
                    <td>Azure Files Provides VMs with similar functionality to Amazon EFS.</td><!--des-->
                    <td>Amazon Elastic File System(EFS)</td><!--aws-->
                </tr>
            </tbody>
        </table>
    </p>

<!-- referance --
  https://learn.microsoft.com/en-us/azure/architecture/aws-professional/services
  https://learn.microsoft.com/en-us/azure/container-apps/
-->